import React from 'react';

export const renderTags = (storeTags) => {
  let tagsArr = storeTags.slice();
  // console.log('1', tagsArr.length);
  // tagsArr.length -= 1;
  // console.log('2', tagsArr.length);
  const length = tagsArr.length;
  if (tagsArr.length > 3) tagsArr.length = 3;
  // console.log('3', tagsArr.length);
  // console.log('arr', tagsArr);

  return tagsArr.map((el, idx) => {
    let tag = null;
    if (el.length > 3) el = el.slice(0, 3);
    tag = el + '...';
    if (idx === 2) tag = `+${length - 2}...`;

    return (
      <div key={el} className="user-select">{tag}</div>
    )
  });
}