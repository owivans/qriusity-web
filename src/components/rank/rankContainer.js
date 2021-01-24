import React, { Component } from 'react';

import Avatar from '../avatar/avatar';
import RankItem from './rankItem';
import { getMiniorUserRanksByScore } from '../../data/user';

import './style.scss';
import cup from '../../img/cup.png';

class RankContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    this.fetchUserRanks()
  };

  fetchUserRanks = async () => {
    const userDataParser = JSON.parse(localStorage.getItem('userData'));
    const { score = 0, } = userDataParser;
    const response = await getMiniorUserRanksByScore({ userScore: score });
    if (response) {
      this.setState({
        userData: userDataParser,
        userRanks: response.data
      })
    }
  };

  render() {
    const { userData, userRanks } = this.state;
    return (
      userData ? <div className='finish-view'>
        <div>
          <div className='jello-horizontal'>
            <Avatar src={cup} size={100} />
          </div>
          <div className='userScore'>Score: {userData ?.score}
            <span className='label'>pts</span>
          </div>
          <div className='rank-list'>
            <RankItem userData={userData} first={true} />
            {userRanks && userRanks.length > 0 ? userRanks.map((rank) =>
              <RankItem userData={rank} />
            ) : null}
          </div>
        </div>
      </div> : null
    )
  }
};

export default RankContainer;
