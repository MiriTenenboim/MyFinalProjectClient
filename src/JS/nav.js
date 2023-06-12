import { Bounce, Elastic } from "gsap";
import { TweenLite } from "gsap/gsap-core";
import React from "react";
import './nav.css';

// TODO: Activate caret active animation

class Nav extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        jsxData: [],
        submenu: []
      };
    }
  
    componentDidMount() {
      this.setState({jsxData: this.createMenuJSX()});
    }
  
    menuClickEvent(i) {
      let submenu = this.state.submenu;
      let tmpmenu = submenu[i];
      let sub     = tmpmenu.sub.current;
      let caret   = tmpmenu.caret.current;
  
      if (tmpmenu.active === false) {
        tmpmenu.active = true;
        
        TweenLite.to(caret, 1, {
          transform: 'rotate(180deg)',
          ease: Elastic.easeOut.config(1, 0.3)
        });
        
        TweenLite.to(sub, 1, {
          height: sub.scrollHeight,
          visibility: 'visible',
          ease: Elastic.easeOut.config(1, 0.3)
        });
      } else {
        tmpmenu.active = false;
        
        TweenLite.to(caret, 1, {
          transform: 'rotate(0deg)',
          ease: Elastic.easeOut.config(1, 0.3)
        });
        
        TweenLite.to(sub, 0.5, {
          height: 0,
          ease: Bounce.easeOut
        }).eventCallback('onComplete', () => {
          TweenLite.to(sub, 0, {
            visibility: 'hidden'
          })
        });
      }
      
      submenu[i] = tmpmenu;
      
      this.setState({submenu: submenu});
    }
  
    createMenuJSX(menu = this.props.menu) {
      let link = [];
  
      for (let i in menu) {
        let m  = menu[i];
        let ic = <i className="cpc-icon cpc-hidden fas fa-caret-down"></i>;
  
        if (typeof m.icon !== 'undefined') {
          ic = <i className={'cpc-icon ' + m.icon}></i>;
        }
  
        if (typeof m.menu === 'undefined') {
          link.push(
            <li>
              <a href={m.link}>
                {ic}
                <span>{i}</span>
                <i className="cpc-caret cpc-hidden fas fa-caret-down"></i>
              </a>
            </li>
          );
        } else if (typeof m.menu === 'object') {
          let tmpSubmenu = this.state.submenu;
          let tmpLength  = tmpSubmenu.length;
  
          tmpSubmenu.push({
            'id': m.link,
            'active': false,
            'caret': React.createRef(),
            'sub': React.createRef()
          });
  
          link.push(
            <li>
              <a
                href={m.link}
                onClick={this.menuClickEvent.bind(this, tmpLength)}
              >
                {ic}
                <span>{i}</span>
                <i
                  className="cpc-caret fas fa-caret-down"
                  ref={tmpSubmenu[tmpLength].caret}
                ></i>
              </a>
              <ul className="cpc-sub" ref={tmpSubmenu[tmpLength].sub}>
                {this.createMenuJSX(m.menu)}
              </ul>
            </li>
          );
  
          this.setState({submenu: tmpSubmenu});
        }
      }
  
      return link;
    }
  
    render() {
      return (
        <nav className="cpc-menu">
          <ul className="cpc-main">
            {this.state.jsxData}
          </ul>
        </nav>
      );
    }
  }

export default Nav;
