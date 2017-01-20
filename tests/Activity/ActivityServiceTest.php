<?php
namespace Tests\Activity;

use Biz\Task\Service\TaskService;
use Biz\BaseTestCase;
use Topxia\Service\Course\CourseService;
use Biz\Activity\Service\ActivityService;

class ActivityServiceTest extends BaseTestCase
{
    public function setUp()
    {
        parent::setUp();
        $this->mockBiz(
            'Course:CourseService',
            'CourseService',
            array(
                array(
                'functionName' => 'tryManageCourse',
                'returnValue' => array('id' => 1)
                )
            )
        );

    }

    /**
     * @expectedException \Codeages\Biz\Framework\Service\Exception\InvalidArgumentException
     */
    public function testCreateActivityWhenInvalidArgument()
    {
        $activity = array(
            'title' => 'test activity'
        );
        
        $savedActivity = $this->getActivityService()->createActivity($activity);
        $this->assertEquals($activity['title'], $savedActivity['title']);
    }

    // /**
    //  * @expectedException \AccessDeniedException
    //  */
    //
    // public function testCreateActivityWhenAccessDenied()
    // {
    //     $activity = array(
    //         'title' => 'test activity'
    //     );
    //     $savedActivity = $this->getActivityService()->createActivity($activity);
    //     $this->assertEquals($activity['title'], $savedActivity['title']);
    // }

    public function testCreateActivity()
    {
        $activity = array(
            'title'           => 'test activity',
            'mediaType'       => 'text',
            'fromCourseId'    => 1,
            'fromCourseSetId' => 1
        );
        $savedActivity = $this->getActivityService()->createActivity($activity);
        $this->assertEquals($activity['title'], $savedActivity['title']);
    }

    public function testUpdateActivity()
    {
        $activity = array(
            'title'           => 'test activity',
            'mediaType'       => 'text',
            'fromCourseId'    => 1,
            'fromCourseSetId' => 1
        );
        $savedActivity = $this->getActivityService()->createActivity($activity);

        $activity['title'] = 'course activity';
        $savedActivity     = $this->getActivityService()->updateActivity($savedActivity['id'], $activity);

        $this->assertEquals($activity['title'], $savedActivity['title']);
    }

    public function testDeleteActivity()
    {
        $activity = array(
            'title'           => 'test activity',
            'mediaType'       => 'text',
            'fromCourseId'    => 1,
            'fromCourseSetId' => 1
        );
        $savedActivity = $this->getActivityService()->createActivity($activity);

        $this->assertNotNull($savedActivity);

        $this->getActivityService()->deleteActivity($savedActivity['id']);

        $savedActivity = $this->getActivityService()->getActivity($savedActivity['id']);
        $this->assertNull($savedActivity);
    }

    public function testFinishTrigger()
    {
        $course = array(
            'id'          => 1,
            'title'       => 'test',
            'courseSetId' => 1,
            'expiryMode'  => 'days',
            'learnMode'   => 'lockMode',
            'expiryDays'  => 0,
            'isDefault'   => 0
        );

        $this->mockBiz(
            'Course:CourseService',
            'CourseService',
            array(
                array(
                'functionName' => 'tryManageCourse',
                'returnValue' => 1
                ),
                array(
                'functionName' => 'getCourse',
                'returnValue' => $course
                ),
                array(
                'functionName' => 'getNextCourseItemSeq',
                'returnValue' => 1
                ),
                array(
                'functionName' => 'updateCourseStatistics',
                'returnValue' => 1
                )
            )
        );

        $task = array(
            'title'           => 'test1 task',
            'mediaType'       => 'text',
            'fromCourseId'    => $course['id'],
            'fromCourseSetId' => 1
        );
        $savedTask = $this->getTaskService()->createTask($task);

        $data = array(
            'task' => $savedTask
        );

        $this->getActivityService()->trigger($savedTask['activityId'], 'start', $data);
        $this->getActivityService()->trigger($savedTask['activityId'], 'finish', $data);
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->getBiz()->service('Activity:ActivityService');
    }

    /**
     * @return TaskService
     */
    protected function getTaskService()
    {
        return $this->getBiz()->service('Task:TaskService');
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->getBiz()->service('Course:CourseService');
    }
}
