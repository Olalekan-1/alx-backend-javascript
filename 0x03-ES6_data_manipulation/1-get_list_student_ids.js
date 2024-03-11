import getListStudents from './0-get_list_students';

export default function getListStudentIds(studData) {
  if (studData && Array.isArray(studData)) {
    const studData = getListStudents();
    return studData.map((obj) => obj.id);
  }
  return [];
}
