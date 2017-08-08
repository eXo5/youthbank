import React from 'react';
import {Row, Col, Icon, Table} from 'react-materialize';

class MoneyEarned extends React.Component {
	render(){
		return(
				<div>
					<Row> 
						<Col>
						<Icon>account_balance</Icon>
						<h6> Total Made : $30.00</h6>
						<h8> Recent Transactions (10 days): </h8>
						<Table>
							<thead>
								<tr>
									<th data-field="id">Task</th>
									<th data-field="name">Deposit Added</th>
									<th data-field="price">Total After </th>
								</tr>
							</thead>

							<tbody>
								<tr>
									<td>Do Laundry</td>
									<td>$5.00</td>
									<td>$30.00</td>
								</tr>
								<tr>
									<td>Help Sis w. homework</td>
									<td>$4.00</td>
									<td>$25.00</td>
								</tr>
								<tr>
									<td>Clean Bathroom</td>
									<td>$8.00</td>
									<td>$21.00</td>
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
