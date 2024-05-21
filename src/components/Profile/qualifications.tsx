const qualifications = [
    { title: 'CSS', id: 1 },
    { title: 'HTML', id: 2 },
    { title: 'React', id: 3 },
    { title: 'JSX', id: 4 },
    { title: 'P5.js', id: 5 },
    { title: 'TypeScript', id: 6 },
]
var str = '<ul>'
qualifications.forEach(function(qualification){
    str += '<li>'+ qualification + '</li>';
});
str += '</ul>';