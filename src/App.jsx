import avocado from './assets/images/avocado.png';
import candle from './assets/images/candle.png';
import popcorn from './assets/images/popcorn.png';
import keys from './assets/images/keys.png';
import orange from './assets/images/orange.png';
import umbrella from './assets/images/umbrella.png';
import yoga from './assets/images/yoga.png';

import { Header } from './components';
import { useState } from 'react';

import Swal from "sweetalert2";

export const App = () => {
	const [ todo, setTodo ] = useState({
		letterOne: '',
		letterTwo: '',
		letterTree: '',
		letterFour: '',
		letterFive: '',
		letterSix: '',
    letterSeven: ''
	});

	const handleChange = (e) => {
		// console.log(e.target.name);
		// console.log(e.target.value);
		// setTodo({ ...todo, [e.target.name]: e.target.value });
		// utilizando el callback
		setTodo((prev) => ({
			...prev,
			[e.target.name]: e.target.value
		}));
	};

	const [ error, setError ] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();

    
		const { letterOne, letterTwo, letterTree, letterFour, letterFive, letterSix, letterSeven } = todo;
    
    console.log('letterOne', letterOne.trim());
		// pequeña validación
		if (!letterOne.trim() || !letterTwo.trim() || !letterTree.trim() || !letterFour.trim() || !letterFive.trim() || !letterSix.trim() || !letterSeven.trim()) {
      console.log("Datos incompletos");
      Swal.fire({
          title: "Error!",
          text: "Todos los campos son obligatorios !",
          icon: "error",
      });
      return;
		} 
    
    if (letterOne.trim() !== "ei") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'avocado' inicia con la vocal 'ei",
        icon: "error",
    });
    return;
		} 

    if (letterTwo.trim() !== "ci") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'candle' inicia con la vocal 'ci",
        icon: "error",
    });
    return;
		} 

    if (letterTree.trim() !== "pi") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'popcorn' inicia con la vocal 'pi",
        icon: "error",
    });
    return;
		} 

    if (letterFour.trim() !== "quei") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'keys' inicia con la vocal 'quei",
        icon: "error",
    });
    return;
		} 

    if (letterFive.trim() !== "ou") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'orange' inicia con la vocal 'ou",
        icon: "error",
    });
    return;
		} 

    if (letterSix.trim() !== "iu") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'umbrella' inicia con la vocal 'iu",
        icon: "error",
    });
    return;
		} 

    if (letterSeven.trim() !== "uai") {
      Swal.fire({
        title: "Error!",
        text: "Ups lo sentimos 'yoga' inicia con la vocal 'uai",
        icon: "error",
    });
    return;
		} 

    if(error === false) {
      Swal.fire({
        title: "success!",
        text: "Felicitaciones haz completado la primera actividad.",
        icon: "success",
    });
    return;
    }

		// Enviar todo a un array!
	};

	return (
		<div>
			<Header />
			<div className="wrapper">
				<section>
					<h1>The alphabet</h1>
					<ul>
						<li>a: /ei/ - Airport</li>
						<li>b: /bi/ - Bike</li>
						<li>c: /ci/ - Coat</li>
						<li>d: /di/ - Dark</li>
						<li>e: /i/ - elephant</li>
						<li>f: /ef/ - Fine</li>
						<li>g: /yi/ - Groove</li>
						<li>h: /eich/ - Hello</li>
						<li>i: /ai/ - Instrumentation</li>
						<li>j: /yei/ - Jeans</li>
						<li>k: /quei/ - Keys</li>
						<li>l: /el/ - look</li>
						<li>m: /em/ - Morning</li>
						<li>n: /en/ - Nothing</li>
						<li>o: /ou/ - Out</li>
						<li>p: /pi/ - Python</li>
						<li>q: /quiu/ - Quest</li>
						<li>r: /ar/ - Road</li>
						<li>s: /es/ - Speed</li>
						<li>t: /ti/ - Talk</li>
						<li>u: /iu/ - Ugly</li>
						<li>v: /vi/ - Vine</li>
						<li>w: /dabol iu/ - Walk</li>
						<li>x: /ex/ - X-men</li>
						<li>y: /uai/ - Yeah</li>
						<li>z: /zi/ - Zeppelin</li>
					</ul>
				</section>
				<section>
					<form onSubmit={handleSubmit}>
						<h1>Practice the alphabet</h1>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/avocado.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __ (ei)</p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ..."
									name="letterOne"
									value={todo.letterOne}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/candle.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __ </p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ... "
									name="letterTwo"
									value={todo.lettertwo}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/popcorn.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __</p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ..."
									name="letterTree"
									value={todo.letterTree}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/keys.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __</p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ..."
									name="letterFour"
									value={todo.letterFour}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/orange.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __ </p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ..."
									name="letterFive"
									value={todo.letterFive}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/umbrella.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __ </p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ..."
									name="letterSix"
									value={todo.letterSix}
									onChange={handleChange}
								/>
							</div>
						</div>

						<div>
							<img src="https://hdvdavidv1.s3.us-east-2.amazonaws.com/learn_english/yoga.png" alt="" />
							<div className="col-md-2">
								<p>This word starts with the letter __ </p>
								<input
									className="form-control mb-2"
									type="text"
									placeholder="completed ..."
									name="letterSeven"
									value={todo.letterSeven}
									onChange={handleChange}
								/>
							</div>
						</div>

						<button className="btn btn-light" type="submit">
							validate
						</button>
					</form>
				</section>
				<section>
					<h1>Answer</h1>
					<ul>
						<li>C - /ci/ - Candle</li>
						<li>P - /pi/ - Popcorn</li>
						<li>K - /quei/ - Keys</li>
						<li>O - /ou/ - Orange</li>
						<li>U - /iu/ - Umbrella</li>
						<li>Y - /uai/ - Yoga</li>
					</ul>
				</section>
			</div>
		</div>
	);
};
