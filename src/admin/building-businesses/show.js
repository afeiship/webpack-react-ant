import  AppBase, {$api} from 'components/scripts/index';

@mixin(['active-state', 'match'])
export default class extends React.Component {

  componentDidMount() {
    this.syncActiveState();
  }

  render() {
    return (
      <div className="show-view">
        <header>HEADER>>></header>
        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div>
        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div>
        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div>
        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div>
        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div>
        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div>

        <div className="p20">
          Show View -> { JSON.stringify(this.params, null, 4)}
        </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div><div className="p20">
        Show View -> { JSON.stringify(this.params, null, 4)}
      </div>


        <footer>FOOTER>>></footer>



      </div>
    );
  }
}

