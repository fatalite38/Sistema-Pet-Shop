/* Elementos da páginaatendimentos*/

const servicosCadastradosEl = document.getElementById("atendimentos-previstos");

/* Atualiza a lista de atendimentos cadastrados com o conteúdo do Local Storage */

let listaServicos = buscarAtendimentos();

/* Renderiza cards com serviços */
if (listaServicos) {
	let cards = "";
	let agendamento = "";
	Object.values(listaServicos).forEach((servico) => {
		if (servico.statusAtendimento === "Agendado") {
			agendamento = "agendado";
		} else if ("Em atendimento") {
			agendamento = "atendimento";
			servico.horarioAtendimento = "";
		}

		let petAgendado = buscarPet(servico.idCachorro);

		cards += `
        <div class="card-atendimento d-flex flex-column bg-white p-0 m-122">
				<img
					src=${servico.fotoCachorro}
					alt="Foto do ${servico.nomeCachorro}"
					class="imgPet"
				/>

				<div class="d-flex justify-content-end editar-atendimento">
					<button onclick="editarServico('${servico.id}')"
						class="editar d-flex justify-content-center align-items-center"
					>
						<img src="../assets/editar.svg" alt="Editar" />
					</button>
				</div>

				<h3 class="primary-text-color">${servico.nomeCachorro}</h3>
				<p class="tutor secondary-text-color">${petAgendado.nomeTutor} ${
			petAgendado.telefoneTutor
		}
				</p>

				<div class="atributos d-flex gap-4 mt-4">
					<div
						class="conteudo-atributos p-0 bg-light rounded-4 d-flex align-items-center px-2"
					>
						<img
							src="../assets/osso.svg"
							class="rounded-4 bg-white"
							alt=""
						/>
						<div class="d-flex flex-column text-atributos">
							<span class="tertiary-text-color">Raça</span>
							<p class="primary-text-color">${petAgendado.raca}</p>
						</div>
					</div>

					<div
						class="conteudo-atributos p-0 bg-light rounded-4 d-flex align-items-center px-2"
					>
						<img
							src="../assets/osso.svg"
							class="rounded-4 bg-white"
							alt=""
						/>
						<div class="d-flex flex-column text-atributos">
							<span class="tertiary-text-color">Nascimento</span>
							<p class="primary-text-color">${petAgendado.idade}</p>
						</div>
					</div>
				</div>

				<div class="atributos d-flex gap-4 mt-3">
					<div
						class="conteudo-atributos p-0 bg-light rounded-4 d-flex align-items-center px-2"
					>
						<img
							src="../assets/osso.svg"
							class="rounded-4 bg-white"
							alt=""
						/>
						<div class="d-flex flex-column text-atributos">
							<span class="tertiary-text-color">Porte</span>
							<p class="primary-text-color">${petAgendado.porte}</p>
						</div>
					</div>

					<div
						class="conteudo-atributos p-0 bg-light rounded-4 d-flex align-items-center px-2"
					>
						<img
							src="../assets/osso.svg"
							class="rounded-4 bg-white"
							alt=""
						/>
						<div class="d-flex flex-column text-atributos">
							<span class="tertiary-text-color">Pelagem</span>
							<p class="primary-text-color">${petAgendado.tipoPelagem}</p>
						</div>
					</div>
				</div>

				<h4 class="primary-text-color">Serviços</h4>
				<p class="serviços secondary-text-color">
                ${servico.tipoServico.join(", ")}
				</p>

				<div class="d-flex align-items-center">
					<div class="circle rounded-circle" id="circle-1" style="margin: 20px 0 0 31px;"></div>
					<p class="status" id="status-1">${servico.statusAtendimento} ${
			servico.horarioAtendimento
		}</p>
				</div>

				<button
					class="primary-btn btn-atendimento text-white border-0 p-3 fw-medium rounded-4 mt-3"
				>
					Iniciar
				</button>
			</div>
        `;
		servicosCadastradosEl.innerHTML = cards;
	});
}

//Editar Cachorro para a pagina
//mudar o caminho de acordo com a pagina de cadastro do serviço
function editarServico(idServico) {
	// Monta a URL com o parâmetro idServico
	const url = `./novo-atendimento.html?idServico=${idServico}`;
	// Redireciona para a URL construída
	window.location.href = url;
}

/* Atualização do status de atendimento */

