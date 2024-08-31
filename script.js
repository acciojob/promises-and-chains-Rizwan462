//your JS code here. If required.
const userForm = document.getElementById("userForm");
const submit = document.getElementById("btn");

submit.addEventListener("click", (event)=>{
	event.preventDefault();

	const name = document.getElementById("name").value;
	const age = document.getElementById("age").value;

	if(name === '' || age === '') {
		alert('Please enter valid details');
		return;
	}	



const ageCheck = new Promise((res, rej)=>{
	setTimeout(()=>{
		if(age > 18) {
			res();
		}else{
			rej();
		}
	}, 4000);
})
ageCheck
	.then(()=>{
		alert(`Welcome, ${name}. You can vote.`);
	})
	.catch(()=>{
		alert(`Oh sorry ${name}. You aren't old enough.`)
	});
});




		
