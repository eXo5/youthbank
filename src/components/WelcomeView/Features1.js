import React from 'react';
import {Card, CardTitle, Tabs, Tab} from 'react-materialize';

class Features1 extends React.Component {
	render(){
	return(

		<Tabs className='tab-demo z-depth-1 tabs-fixed-width'>
			<Tab title="About" active>
				<Card header={<CardTitle reveal image={"https://cmgstatesmanparenting.files.wordpress.com/2014/10/kid-chores.jpg"} waves='light'/>}
						title="Welcome to Young Money"
						reveal={<p>Young Money is a unique application that enables parents to help children valuable lessons in: money management, attaining goals, </p>}>
						<p></p>
				</Card>
			</Tab>
			<Tab title="Parent View" >
				<Card header={<CardTitle reveal image={"http://www.turnbacktogod.com/wp-content/uploads/2012/03/Divine-Relationship-Between-Parents-And-Children.jpg"} waves='light'/>}
						title="Parent View Info"
						reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
						<p></p>
				</Card>
			</Tab>
			<Tab title="Child View">
				<Card header={<CardTitle reveal image={"https://aotw-pd.s3.amazonaws.com/images/piggy-bank.jpg"} waves='light'/>}
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

