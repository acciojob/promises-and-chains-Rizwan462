//your JS code here. If required.
let userForm = document.getElementById('userForm');
let submit = document.getElementById('submit');

submit.addEventListener("click", (e)=>{
	event.preventDefault();

	const name = document.getElementById('name').value;
	const age = document.getElementById('age').value;

	if(name === '' || age === '') {
		alert('please fill in both fields.');
		return;
	}	

const ageNum = pareInt(age);

const ageCheck = new Promise((res, rej)=>{
	setTimeout(()=>{
		if(ageNum > 18) {
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




		
