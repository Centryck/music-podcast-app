import { Paths } from './paths';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../pages/home';
import PodcastDetails from '../pages/podcast-details';
import EpisodeDetails from '../pages/episode-details';

const Router = () => {
	
	return (
		<BrowserRouter>
			<Route path={Paths.Home} element={<Home />}/>
			<Route path={Paths.PodcastDetails} element={<PodcastDetails />} />
			<Route path={Paths.EpisodeDetails} element={<EpisodeDetails />} />
		</BrowserRouter>
	)
}

export default Router;