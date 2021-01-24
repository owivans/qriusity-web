import { connect } from 'react-redux';

import { registration } from '../../redux/selectors/users';

const mapStateToProps = (state) => ({user: registration(state)});

export default connect(mapStateToProps);
