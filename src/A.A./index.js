import React from 'react'
const div = {
	background: "white",
	marginLeft: "30%", 
	marginTop: "3%", 
	padding: "20px",
	width: "40%",
	borderRadius: "20px"
}
const div2 = {
	background: "white",

	marginLeft: "30%", 
	marginTop: "3%", 
	padding: "20px",
	width: "40%",
	borderRadius: "20px"
}
function AA(props){
	return(
		<React.Fragment>
		<div style={div2}>
		<h4>Alcoholics Anonymous (AA) is an international mutual aid fellowship with
		the stated purpose of enabling its members to "stay sober and help other alcoholics achieve sobriety."
		AA is nonprofessional, self-supporting, and apolitical. 
		Its only membership requirement is a desire to stop drinking.
		The AA program of recovery is set forth in the Twelve Steps.</h4>
		</div>

		<div style={div}>
						<h1>THE TWELVE STEPS OF ALCOHOLICS ANONYMOUS</h1>
			<br/>
			<p>1. We admitted we were powerless over alcohol—that our lives had become
			unmanageable.</p>

			<p>2. Came to believe that a Power greater than ourselves could restore us to
			sanity.</p>

			<p>3. Made a decision to turn our will and our lives over to the care of God as we
			understood Him.</p>

			<p>4. Made a searching and fearless moral inventory of ourselves.</p>

			<p>5. Admitted to God, to ourselves, and to another human being the exact nature
			of our wrongs.</p>

			<p>6. Were entirely ready to have God remove all these defects of character.</p>

			<p>7. Humbly asked Him to remove our shortcomings.</p>

			<p>8. Made a list of all persons we had harmed, and became willing to make
			amends to them all.</p>

			<p>9. Made direct amends to such people wherever possible, except when to do
			so would injure them or others.</p>

			<p>10. Continued to take personal inventory and when we were wrong promptly
			admitted it.</p>

			<p>11. Sought through prayer and meditation to improve our conscious contact with
			God as we understood Him, praying only for knowledge of His will for us and
			the power to carry that out.</p>

			<p>12. Having had a spiritual awakening as the result of these steps, we tried to
			carry this message to alcoholics, and to practice these principles in all our
			affairs.</p>
		</div>
		</React.Fragment>
	)
}

export default AA