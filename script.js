function handleSubmit() {
  const inputValue = $('#inputBox').textbox('getValue').trim();
  if (inputValue === '') return;

  appendToHistory(inputValue);
  $('#inputBox').textbox('clear');
}

function appendToHistory(text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById('historyList').appendChild(li);
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

/* 추가 */
function resetHistory() {
  const list = document.getElementById('historyList');
  list.innerHTML = '';
}

if (typeof module !== 'undefined') {
  module.exports = {
    appendToHistory,
    resetHistory // 추가
   };
}
