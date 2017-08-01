import React from 'react';
import {Card, CardTitle, Tabs, Tab} from 'react-materialize';

class Features1 extends React.Component {
	render(){
	return(

		<Tabs className='tab-demo z-depth-1 tabs-fixed-width'>
			<Tab title="OnPageLoad" active>
				<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
						title="OnPageLoad Info"
						reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
						<p></p>
				</Card>
			</Tab>
			<Tab title="Parent View" >
				<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
						title="Parent View Info"
						reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
						<p></p>
				</Card>
			</Tab>
			<Tab title="Child View">
				<Card header={<CardTitle reveal image={"img/office.jpg"} waves='light'/>}
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

