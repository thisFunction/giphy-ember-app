export default function(){
    this.transition(
      this.fromRoute('index.index'),
      this.toRoute('index.favorites'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.fromRoute('index.index'),
      this.toRoute('index.gifs'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.fromRoute('index.gifs'),
      this.toRoute('index.favorites'),
      this.use('toLeft'),
      this.reverse('toRight')
    );

    this.transition(
      this.fromRoute('index.gifs'),
      this.toRoute('index.gif'),
      this.use('toDown'),
      this.reverse('toUp')
    );

    this.transition(
      this.fromRoute('index.favorites'),
      this.toRoute('index.gif'),
      this.use('toDown'),
      this.reverse('toUp')
    );

    this.transition(
      this.fromRoute('index.gif'),
      this.toRoute('index.favorites'),
      this.use('toDown'),
      this.reverse('toUp')
    );

}
