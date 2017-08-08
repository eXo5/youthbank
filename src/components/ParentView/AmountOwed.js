import React from 'react';
import {Row, Col, Icon, Table} from 'react-materialize';

class MoneyEarned extends React.Component {
	render(){
		return(
				<div>
					<Row> 
						<Col>
						<Icon>account_balance</Icon>
						<h6> Money Owed To Kids : $5.00</h6>
						<h8> Recent Transactions (10 days): </h8>
						<Table>
							<thead>
								<tr>
									<th data-field="id">Child/Task</th>
									<th data-field="name">Paid</th>
									<th data-field="price">Amount Owed</th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>Molly: Do Laundry</td>
									<td>$10.00</td>
									<td>$5.00</td>
								</tr>
								<tr>
									<td>Molly: Help Sis w. homework</td>
									<td>$4.00</td>
									<td>$0</td>
								</tr>
								<tr>
									<td>Molly: Clean Bathroom</td>
									<td>$8.00</td>
									<td>$0</td>
								</tr>
							</tbody>
						</Table>
						</Col>
					</Row>
					<hr/>
				</div>
		)
	}
}

export default MoneyEarned;