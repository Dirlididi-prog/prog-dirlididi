import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/header/header';
import Section from '../../components/section/section';
import CardIcon from '../../components/card-icon/card-icon';
import CardButton from '../../components/card-button/card-button';
import Card from '../../components/card/card';
import * as WelcomeConst from '../../constants/welcome-constants';
import * as WelcomeAction from '../../actions/welcome-actions';
import Spinner from '../../components/spinner/spinner';

class Welcome extends Component {
  componentDidMount () {
    this.props.onInitWelcome();
  }

  mountComponentChildren = (dataList = [], Component) => {
    return (dataList.map(data => {
      return <Component {...data} key={data.title} />;
    }
    ));
  };

  render () {
    const { dataHeader, cardIconList, sectionData } = WelcomeConst;

    if (this.props.isLoading) {
      return <Spinner />;
    }

    return (
      <div className={'welcome-body'}>
        <Header {...dataHeader} >
          <span>
            {
              `${this.props.data['solutions']} SUBMISSIONS,
              ${this.props.data['users']} USERS,
              ${this.props.data['problems']} PROBLEMS`
            }
          </span>
        </Header>
        <Section {...sectionData.section1}>
          { this.mountComponentChildren(cardIconList, CardIcon) }
        </Section>
        <Section {...sectionData.section2}>
          { this.mountComponentChildren([], CardButton)}
        </Section>
        <Section {...sectionData.section3}>
          { this.mountComponentChildren([], Card)}
        </Section>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    data: state.welcomeReducer.data,
    isLoading: state.welcomeReducer.isLoading
  }
);

const mapDispatchToProps = dispatch => (
  {
    onInitWelcome: () => dispatch(WelcomeAction.initWelcome())
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
