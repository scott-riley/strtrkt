import React, {Component} from "react";

import Btn from 'components/Global/Btn/Btn';
import Wrapper from 'components/Global/Wrapper/Wrapper';

import styles from './Homepage.css';
import m from 'global/modifiers';

export default class Homepage extends Component {
  render() {
    return(
      <div id="homepage">
        <Wrapper>
          <p className={m.beta}>Ello, dis is homepage</p>
        </Wrapper>
        <div className={[styles.row, m.mbalpha].join(' ')}>
          <Wrapper>
            <div className={styles.mainColumn}>
              Woahhhh column 1
            </div>
            <div className={styles.secondColumn}>
              Ey woah column 2
            </div>
          </Wrapper>
        </div>
        <div className={[styles.row, m.mbalpha].join(' ')}>
          <Wrapper>
            <div className={styles.thirds}>
              Cols are gr8
            </div>
            <div className={styles.thirds}>
              Like super gr8
            </div>
            <div className={styles.thirds}>
              Thanks based Lost Grid
            </div>
          </Wrapper>
        </div>
        <div className={styles.row}>
          <Wrapper>
            <div className={styles.sixths}>
              Can u
            </div>
            <div className={styles.sixths}>
              see where
            </div>
            <div className={styles.sixths}>
              this shit
            </div>
            <div className={styles.sixths}>
              is going
            </div>
            <div className={styles.sixths}>
              now
            </div>
            <div className={styles.sixths}>
              m8s?
            </div>
          </Wrapper>
        </div>
      </div>
    )
  }
}
