import React from 'react'

function TaxRule() {
    return (
        <div className="container">
            <h2>Get to know the rules at first!</h2>
            <table>
                <caption>The latest tax rates:</caption>
                <thead>
                    <tr>
                        <th>Annual Taxable Income (BDT)</th>
                        <th>Tax Rate (%)</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Up to 375,000</td>
                        <td>0%</td>
                    </tr>
                    <tr>
                        <td>Next 300,000</td>
                        <td>10%</td>
                    </tr>
                    <tr>
                        <td>Next 400,000</td>
                        <td>15%</td>
                    </tr>
                    <tr>
                        <td>Next 500,000</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Next 2,000,000</td>
                        <td>25%</td>
                    </tr>
                    <tr>
                        <td>Above 3,575,000</td>
                        <td>30%</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>Tax Exemption Limits (Bangladesh)</caption>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Exemption Limit (BDT)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>General taxpayers</td>
                        <td>375,000</td>
                    </tr>
                    <tr>
                        <td>Women & Senior Citizens (65+)</td>
                        <td>425,000</td>
                    </tr>
                    <tr>
                        <td>People with Disabilities</td>
                        <td>500,000</td>
                    </tr>
                    <tr>
                        <td>Third-Gender Individuals</td>
                        <td>500,000</td>
                    </tr>
                    <tr>
                        <td>War-wounded Freedom Fighters</td>
                        <td>525,000</td>
                    </tr>
                    <tr>
                        <td>Parent of a Disabled Child</td>
                        <td>Extra 50,000 per child</td>
                    </tr>
                </tbody>
            </table>
            <table>
                <caption>Minimum tax for those who cross exemption limit</caption>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Minimum tax</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>First time tax payers</td>
                        <td>1000TK</td>
                    </tr>
                    <tr>
                        <td>Regular payers</td>
                        <td>5000Tk</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TaxRule