import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './components/Simples'
import ParImpar from './components/ParImpar'
import Contador from './components/Contador'
import Plataformas from './components/Plataformas'
import ValidarProps from './components/ValidarProps'
import Evento from './components/Evento'
import Avo from './components/ComunicacaoDireta'
import Inverter, { MegaSena } from './components/Multi'

export default createDrawerNavigator({
	Avo: {
		screen: () => <Avo nome='Manoel' sobrenome='Silva' />,
		navigationOptions: { title: 'Comunicação Direta' }
	},
	Evento: {
		screen: Evento
	},
	ValidarProps: {
		screen: () => <ValidarProps ano={19} />,
		navigationOptions: { title: 'Validar Props' }
	},
	Plataformas: {
		screen: Plataformas
	},
	Contador: {
		screen: () => <Contador inicial={50}/>
	},
	MegaSena: {
		screen: () => <MegaSena numeros={8} />,
		navigationOptions: { title: 'Mega Sena' }
	},
	Inverter: {
		screen: () => <Inverter texto='React' />
	},
	ParImpar: {
		screen: () => <ParImpar numero={3} />
	},
	Simples: {
		screen: () => <Simples texto='Simples' />
	}
}, { drawerWidth: 200 })