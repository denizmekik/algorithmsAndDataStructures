var kthElement = function(list, k) {
  var p1 = list.head;
  var p2 = list.head;

  for(var i=1; i <= k; i++) {
    p2 = p2.next
  }

  while(p2.next != null) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1
}