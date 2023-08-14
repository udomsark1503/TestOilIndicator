import React from 'react';

const MenuDetail = () => {

return (
<div class="btn-group dropend menuGroup">
  <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      Oil Indicator
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="/home">All Oil Indicator</a></li>
    <li><a class="dropdown-item" href="/oil1">Oil Indicator 1</a></li>
    <li><a class="dropdown-item" href="/oil2">Oil Indicator 2</a></li>
    <li><a class="dropdown-item" href="/oil3">Oil Indicator 3</a></li>
    <li><a class="dropdown-item" href="/oil4">Oil Indicator 4</a></li>
    <li><a class="dropdown-item" href="/oil5">Oil Indicator 5</a></li>
    <li><a class="dropdown-item" href="/oil6">Oil Indicator 6</a></li>
    <li><a class="dropdown-item" href="/oil7">Oil Indicator 7</a></li>
    <li><a class="dropdown-item" href="/oil8">Oil Indicator 8</a></li>
  </ul>
</div>
)
};
export default MenuDetail;