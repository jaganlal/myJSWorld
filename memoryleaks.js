/*
* @Author: Jaganlal Thoppe
* @Date:   2017-03-18 11:55:57
* @Last Modified by:   Jaganlal Thoppe
* @Last Modified time: 2017-03-18 14:57:56
* @Inspired: https://developers.google.com/web/tools/chrome-devtools/memory-problems/
*/

// 'use strict';

/*
* Visualize memory leaks with Timeline recordings
*/
var x = [];
function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement('div'));
  }
  x.push(new Array(1000000).join('x'));
}
document.getElementById('grow').addEventListener('click', grow);


/*
* Discover detached DOM tree memory leaks with Heap Snapshots
*/
var detachedNodes;
function create() {
  var ul = document.createElement('ul');
  for (var i = 0; i < 10; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
  }
  detachedTree = ul;
}
document.getElementById('create').addEventListener('click', create);


/*
* Identify JS heap memory leaks with Allocation Timelines
*/
var x = [];

function memgrow() {
  x.push(new Array(1000000).join('x'));
}

function clearmemory() {
  delete x;
  x = [];
}

document.getElementById('memgrow').addEventListener('click', grow);
document.getElementById('clearmemory').addEventListener('click', clearmemory);