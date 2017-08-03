import React from 'react';
import {Card, CardTitle, Tabs, Tab} from 'react-materialize';

class Features1 extends React.Component {
	render(){
	return(

		<Tabs className='tab-demo z-depth-1 tabs-fixed-width'>
			<Tab title="About" active>
				<Card header={<CardTitle reveal image={"https://s-media-cache-ak0.pinimg.com/600x315/44/ed/9e/44ed9e0b8672efcdb67831a04699927f.jpg"} waves='light'/>}
						title="Welcome to Young Money"
						reveal={<p>Young Money is a unique application that enables parents to help children valuable lessons in: money management, attaining goals, </p>}>
						<p></p>
				</Card>
			</Tab>
			<Tab title="Parent View" >
				<Card header={<CardTitle reveal image={"http://orig10.deviantart.net/a71a/f/2015/143/e/a/george_warshington_by_sharpwriter-d8uigwg.jpg"} waves='light'/>}
						title="Parent View Info"
						reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
						<p></p>
				</Card>
			</Tab>
			<Tab title="Child View">
				<Card header={<CardTitle reveal image={"http://www.dailyracingrag.com/trump/clown-overboard.jpg"} waves='light'/>}
						title="Card Title Info"
						reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
						<p></p>
				</Card>
			</Tab>
		</Tabs>

		)
		
	}
}

export default Features1;

