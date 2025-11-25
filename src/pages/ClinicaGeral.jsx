import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Stethoscope, Heart, Users, Clock, CheckCircle, 
  Calendar, Phone, ArrowRight, Shield, Activity,
  Star, Award, UserCheck, AlertTriangle
} from 'lucide-react'

export default function ClinicaGeral() {
  const servicos = [
    {
      titulo: 'Consultas de Rotina',
      descricao: 'Check-ups periódicos para manutenção da saúde e prevenção de doenças',
      icon: CheckCircle
    },
    {
      titulo: 'Diagnóstico e Tratamento',
      descricao: 'Identificação e tratamento de doenças comuns como gripes, infecções e dores',
      icon: Activity
    },
    {
      titulo: 'Acompanhamento Crônico',
      descricao: 'Monitoramento de diabetes, hipertensão e outras condições crônicas',
      icon: Heart
    },
    {
      titulo: 'Medicina Preventiva',
      descricao: 'Orientações sobre estilo de vida saudável e prevenção de doenças',
      icon: Shield
    },
    {
      titulo: 'Atestados Médicos',
      descricao: 'Emissão de atestados, receitas e encaminhamentos para especialistas',
      icon: Award
    },
    {
      titulo: 'Emergências',
      descricao: 'Atendimento de urgências médicas durante horário de funcionamento',
      icon: AlertTriangle
    }
  ]

  const condicoesTratadas = [
    'Gripes e resfriados',
    'Infecções diversas',
    'Hipertensão arterial',
    'Diabetes mellitus',
    'Dores musculares',
    'Problemas digestivos',
    'Alergias',
    'Ansiedade e estresse',
    'Problemas de pele',
    'Distúrbios do sono',
    'Colesterol alto',
    'Problemas respiratórios'
  ]

  const vantagens = [
    {
      icon: Users,
      titulo: 'Médicos Experientes',
      descricao: 'Profissionais com mais de 10 anos de experiência em clínica geral'
    },
    {
      icon: Clock,
      titulo: 'Atendimento Rápido',
      descricao: 'Consultas pontuais com tempo adequado para cada paciente'
    },
    {
      icon: Heart,
      titulo: 'Cuidado Humanizado',
      descricao: 'Atendimento personalizado e acolhedor para toda a família'
    },
    {
      icon: Shield,
      titulo: 'Segurança Total',
      descricao: 'Protocolos rigorosos de higiene e segurança médica'
    }
  ]

  const depoimentos = [
    {
      nome: 'Ana Silva',
      idade: '42 anos',
      texto: 'A Dra. Maria me acompanha há 3 anos. Profissional excepcional, sempre atenciosa e cuidadosa.',
      rating: 5
    },
    {
      nome: 'João Santos',
      idade: '55 anos',
      texto: 'Excelente atendimento para toda minha família. Confiança total nos profissionais.',
      rating: 5
    },
    {
      nome: 'Carla Costa',
      idade: '38 anos',
      texto: 'Desde que descobri a Climepo, não troco por nada. Cuidado médico de primeira qualidade.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen pt-32">
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-full"
              >
                <Stethoscope className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Clínica <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Geral</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Atendimento médico completo para toda a família, com foco na prevenção, 
              diagnóstico e tratamento de uma ampla gama de condições de saúde.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Serviços Oferecidos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Serviços <span className="gradient-text">Oferecidos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossos clínicos gerais estão preparados para oferecer um cuidado integral, 
              desde consultas de rotina até o manejo de doenças crônicas.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((servico, index) => {
              const IconComponent = servico.icon
              return (
                <motion.div
                  key={servico.titulo}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {servico.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {servico.descricao}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Condições Tratadas */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Principais <span className="gradient-text">Condições Tratadas</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa equipe de clínica geral está apta a diagnosticar e tratar uma 
                vasta gama de condições, garantindo um cuidado completo e integrado.
              </p>
              <Link
                to="/contato"
                className="btn-primary flex items-center justify-center space-x-2 w-fit"
              >
                <span>Agendar uma Avaliação</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {condicoesTratadas.map((condicao, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{condicao}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vantagens */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vantagens.map((vantagem, index) => {
              const IconComponent = vantagem.icon
              return (
                <motion.div
                  key={vantagem.titulo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full mb-6 mx-auto shadow-lg"
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {vantagem.titulo}
                  </h3>
                  <p className="text-gray-600">
                    {vantagem.descricao}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              O que nossos <span className="gradient-text">pacientes</span> dizem
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <motion.div
                key={depoimento.nome}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(depoimento.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  \"{depoimento.texto}\"
                </p>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">{depoimento.nome}</p>
                    <p className="text-sm text-gray-500">{depoimento.idade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Agende sua consulta de Clínica Geral
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Dê o primeiro passo para um cuidado contínuo e completo da sua saúde. 
              Nossa equipe está pronta para te receber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contato" className="btn-outline flex items-center space-x-2 text-lg px-10 py-4">
                  <Calendar className="w-5 h-5" />
                  <span>Agendar Consulta</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="tel:+559132234567" 
                  className="btn-secondary bg-white text-primary-600 flex items-center space-x-2 text-lg px-10 py-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>(91) 3223-4567</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}