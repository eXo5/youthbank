import React from 'react';
import {Card, CardTitle, Tabs, Tab} from 'react-materialize';
import piggy from '../../img/WelcomeView/piggy-bank.jpg';
import pvOne from '../../img/WelcomeView/ssparent-1.png';
import pvTwo from '../../img/WelcomeView/ssparent-2.png';
import cvOne from '../../img/WelcomeView/sschild-1.png';


class Features1 extends React.Component {
	render(){
	return(

		<Tabs className='tab-demo z-depth-1 tabs-fixed-width'>
			<Tab title="About" active>
				<Card header={<CardTitle reveal image={"https://cmgstatesmanparenting.files.wordpress.com/2014/10/kid-chores.jpg"} waves='light'/>}
						title="Welcome to Young Money"
						reveal={<div>

							<img src="http://www.focusonthefamily.com/-/medialibrary/images/articles/helping-your-teen-choose-a-college.jpg" alt="hug" height="500" />
							<p>Getting kids motivated to help out is tough.  Let us help make it easier.</p>

							<p>Young Money is a unique application that enables parents to help children valuable lessons in: </p>
							<br/>
							- Money Management
							- Attaining Goals
							- Hard Work
							- Discipline
							

							<p>With the help of Young Money, your children will learn the value of a dollar and help prepare them for the future.</p>

							<p>See what features our two special "Parent" and "Child" views have it store.</p>	

							</div>

							}>
						
				</Card>
			</Tab>
			<Tab title="Parent View" >
				<Card header={<CardTitle reveal image={"http://www.turnbacktogod.com/wp-content/uploads/2012/03/Divine-Relationship-Between-Parents-And-Children.jpg"} waves='light'/>}
						title="Parent View Info"
						reveal={<div>
						<p>In the "Parent" view, keeping track of your children's chores is easy!</p>
						<p>Set and manage the tasks you choose for your child in our easy-to-use, "Parent View".</p>
						<p>Here, you have your own unique log-in to keep your information safe.</p>
						<img src={pvOne} alt="Parent View" height="500" />
						<p>View payments made to your children to keep track of how much they've earned.</p>
						<p>When you set a task, your child or children are able to claim the tasks as their own.  When they say they're complete, you have the ability to approve if the task was done and done properly.</p>
						
						<img src={pvTwo} alt="Parent View" height="500" />
						<p>In the "Parent" View, you are able to create an account for your child or children.  Keep their info safe and keep track of the tasks they do and the goals they set.</p>


						</div>}>
						
				</Card>
			</Tab>
			<Tab title="Child View">
				<Card header={<CardTitle reveal image={piggy} waves='light'/>}
						title="Child View Info"
						reveal={<div>
						<img src={cvOne} alt="Child View" height="500" />
						<p>By logging into the "Child" view, with the credentials you helped create, your kids can keep track of what tasks they have to do, sign up for them and even keep track of their goals!</p>

						<p>Kids are also able to keep track of their money and how much they've earned, so they can see how close they are to achieving their goal.</p>
						
						</div>}>
						
				</Card>
			</Tab>
		</Tabs>

		)
		
	}
}

export default Features1;

