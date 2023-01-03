export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr.filter((a) => a.location === city)
    .map((a) => ({
      id: a.id,
      firstName: a.firstName,
      location: a.location,
      grade: (newGrades.filter((gr) => gr.studentId === a.id)[0] || { grade: 'N/A' }).grade,
    }));
}
