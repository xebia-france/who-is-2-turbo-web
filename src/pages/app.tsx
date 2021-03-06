import React, { FunctionComponent } from 'react';
import { RouteComponentProps, Router } from '@reach/router';
import { PrivateRoute } from '../components/Private/Private';
import { Play } from '../components/Play/Play';
import { End } from '../components/End/End';
import { PageProps } from 'gatsby';
import { Gallery } from '../components/Gallery/Gallery';
import { Leaderboard } from "../components/Leaderboard/Leaderboard";
import { Profile } from "../components/Profile/Profile";

const PlayPage = (_props: RouteComponentProps) => <PrivateRoute component={Play}/>;
const GalleryPage = (_props: RouteComponentProps) => <PrivateRoute component={Gallery}/>;
const LeaderboardPage = (_props: RouteComponentProps) => <PrivateRoute component={Leaderboard}/>;
const EndPage = (props: RouteComponentProps) => <PrivateRoute component={End} {...props}/>;
const ProfilePage = (_props: RouteComponentProps) => <PrivateRoute component={Profile}/>;

const App: FunctionComponent<PageProps> = ({ location }) => (
  <>
    <Router>
      <PlayPage path="/app/play"/>
      <GalleryPage path="/app/gallery"/>
      <LeaderboardPage path="/app/leaderboard"/>
      <ProfilePage path="/app/profile"/>
      <EndPage path="/app/end" location={location}/>
    </Router>
  </>
);

export default App;
