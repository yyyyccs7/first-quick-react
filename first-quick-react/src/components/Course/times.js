const terms = { F: 'Fall', W: 'Winter', S: 'Spring'};
const days = ['M', 'Tu', 'W', 'Th', 'F'];
const meetsPat = /^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/;

const addScheduleTimes = schedule => ({
    title: schedule.title,
    courses: Object.values(schedule.courses).map(addCourseTimes)
});
  
const addCourseTimes = course => ({
    ...course,
    ...timeParts(course.meets)
});
  
const timeConflict = (course1, course2) => (
    daysOverlap(course1.days, course2.days) && hoursOverlap(course1.hours, course2.hours)
);

const hasConflict = (course, selected) => (
    selected.some(selection => course !== selection && courseConflict(course, selection))
);

const hoursOverlap = (hours1, hours2) => (
    Math.max(hours1.start, hours2.start) < Math.min(hours1.end, hours2.end)
);

const getCourseNumber = course => (
    course.id.slice(1, 4)
);

const courseConflict = (course1, course2) => (
    course1 !== course2
    && getCourseTerm(course1) === getCourseTerm(course2)
    && timeConflict(course1, course2)
);

const getCourseTerm = course => (
    terms[course.id.charAt(0)]
);  

const timeParts = meets => {
    const [match, days, hh1, mm1, hh2, mm2] = meetsPat.exec(meets) || [];
    return !match ? {} : {
      days,
      hours: {
        start: hh1 * 60 + mm1 * 1,
        end: hh2 * 60 + mm2 * 1
      }
    };
};

const daysOverlap = (days1, days2) => ( 
    days.some(day => days1.includes(day) && days2.includes(day))
);

export { getCourseNumber, getCourseTerm, hasConflict, hoursOverlap, daysOverlap, addCourseTimes, addScheduleTimes, timeParts };