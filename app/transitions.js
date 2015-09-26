export default function(){
  this.transition(
    this.fromRoute(null),
    this.toRoute('track'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
