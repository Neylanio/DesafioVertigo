const aulas = [
  {
    discipline: "math",
    startHour: 11,
    startMinute: 0
  },
  {
    discipline: "biology",
    startHour: 12,
    startMinute: 15
  },
];

function filteredClasses(aulas) {
  return aulas.filter(aula => {
    if(aula.startMinute % 2 != 0) {
      return aula;
    }
  });
}

const retorno = filteredClasses(aulas);
console.log(retorno)
