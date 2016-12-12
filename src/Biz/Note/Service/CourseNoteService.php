<?php
namespace Biz\Note\Service;

interface CourseNoteService
{
    public function getNote($id);

    public function getUserTaskNote($userId, $taskId);

    public function findUserCourseNotes($userId, $courseId);

    public function searchNotes($conditions, $sort, $start, $limit);

    public function searchNoteCount($conditions);

    public function saveNote(array $note);

    public function deleteNote($id);

    public function deleteNotes(array $ids);

    public function waveLikeNum($id, $num);

    public function like($noteId);

    public function cancelLike($noteId);

    public function getNoteLikeByNoteIdAndUserId($noteId, $userId);

    public function findNoteLikesByUserId($userId);

    public function findNoteLikesByNoteId($noteId);

    public function findNoteLikesByNoteIds(array $noteIds);

    public function findNoteLikesByNoteIdsAndUserId(array $noteIds, $userId);
}