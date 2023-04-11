import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class TableComponent extends Component {
  @action dragFunctionality() {
    const table = document.querySelector('table');
    const tableWrapper = document.querySelector('.table-wrapper');
    let isDragging = false;
    let initialDragPosition;
    let initialScrollPosition;

    tableWrapper.addEventListener('mousedown', (e) => {
      isDragging = true;
      initialDragPosition = e.pageX - tableWrapper.offsetLeft;

      console.log(initialDragPosition);
      initialScrollPosition = tableWrapper.scrollLeft;
      table.classList.add('grabbing');
    });

    tableWrapper.addEventListener('mouseup', () => {
      isDragging = false;
      table.classList.remove('grabbing');
      // console.log('event', e.pageX);
      // console.log('event', e.clientX);
      // console.log('event', e.offsetX);
      // console.log('div', tabletableWrapper.offsetLeft);
      // console.log('div', tabletableWrapper.clientX);
      // console.log(e.pageX - tabletableWrapper.offsetLeft);
      // console.log(tabletableWrapper.scrollLeft);
    });

    tableWrapper.addEventListener('mouseleave', () => {
      isDragging = false;
    });

    tableWrapper.addEventListener('mousemove', (e) => {
      // console.log(isDragging);
      // console.log(tabletableWrapper.offsetLeft);
      // console.log('page', event.pageX);
      // console.log('offset', event.offsetX);
      // console.log('client', event.clientX);
      if (!isDragging) return;
      e.preventDefault();
      // const dragingValueFrom =
      const dragCursorMovingValue = e.pageX - tableWrapper.offsetLeft;

      const actualdraggingValue = dragCursorMovingValue - initialDragPosition;
      console.log(actualdraggingValue);

      tableWrapper.scrollLeft = initialScrollPosition - actualdraggingValue;
    });
  }
}
