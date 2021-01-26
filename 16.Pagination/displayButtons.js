const displayButtons = (container, pages, activeIndex) => {
  //Iterate over the pages and return btns
  let btns = pages.map((_, pageIndex) => {
    return `
      <button class="page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}" data-index="${pageIndex}">
        ${pageIndex + 1}
      </button>`;
       
  });
  
  btns.unshift('<button class="prev-btn">prev</button>');
  btns.push('<button class="next-btn">next</button>')
  container.innerHTML = btns.join('');
}

export default displayButtons;