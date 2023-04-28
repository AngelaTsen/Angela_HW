// document.addEventListener('keydown', function(event) {
//     if (event.ctrlKey && event.key === 'e') {
//         event.preventDefault(); // вимкнути поведінку за замовчуванням
//         let textDiv = document.getElementById('text');
//         let text = textDiv.innerHTML;
//         let textarea = document.createElement('textarea');
//         textarea.innerHTML = text;
//         textarea.addEventListener('keydown', function(event) {
//             if (event.ctrlKey && event.key === 's') {
//                 event.preventDefault(); // вимкнути поведінку за замовчуванням
//                 var newText = textarea.value;
//                 textDiv.innerHTML = newText;
//                 textDiv.style.display = 'block';
//                 textarea.style.display = 'none';
//             }
//         });
//         textDiv.style.display = 'none';
//         textarea.style.display = 'block';
//         document.body.appendChild(textarea);
//         textarea.focus();
//     }
// });

const div = document.querySelector('div');
if 