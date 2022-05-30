
$(function() {
  $('.article--archive').paginathing({//親要素のclassを記述
  pageNumbers: true,
  perPage: 5,//1ページあたりの表示件数
  firstText: '<img class="pagination-list__icon" src="image/archive_search/pagination-pre.jpg" alt=""></img>',
  lastText: '<img class="pagination-list__icon" src="image/archive_search/pagination-next.jpg" alt=""></img>',
  prevText: '<img class="pagination-list__icon" src="image/archive_search/pagination-pre.jpg" alt=""></img><span class=pagination-list__text>前へ</span>',
  nextText: '<span class=pagination-list__text>次へ</span><img class="pagination-list__icon" src="image/archive_search/pagination-next.jpg" alt=""></img>',
	activeClass: 'navi-current',
  })
});

