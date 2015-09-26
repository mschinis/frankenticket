export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('track'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};
