/**
 * @jest-environment jsdom
 */

const { appendToHistory,
      } = require('./script');

describe('appendToHistory', () => {
  beforeEach(() => {
    document.body.innerHTML = '<ul id="historyList"></ul>';
  });

  test('입력한 문자열을 리스트에 추가한다', () => {
    appendToHistory('테스트 입력');
    const listItems = document.querySelectorAll('#historyList li');
    expect(listItems.length).toBe(1);
    expect(listItems[0].textContent).toBe('테스트 입력');
  });

  test('여러 번 호출 시 항목이 누적된다', () => {
    appendToHistory('첫번째');
    appendToHistory('두번째');
    const listItems = document.querySelectorAll('#historyList li');
    expect(listItems.length).toBe(2);
    expect(listItems[1].textContent).toBe('두번째');
  });
});
