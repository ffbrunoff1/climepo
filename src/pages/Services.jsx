import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Stethoscope, Heart, Microscope, Activity, Calendar, 
  CheckCircle, Clock, Users, Shield, Phone, ArrowRight,
  Star, Award, UserCheck, CreditCard
} from 'lucide-react'

export default function Services() {
  const servicos = [
    {
      icon: Stethoscope,
      title: 'Clínica Geral',
      description: 'Atendimento médico geral completo para toda a família, com foco na prevenção, diagnóstico e tratamento de doenças comuns.',
      features: [
        'Consultas de rotina e preventivas',
        'Check-ups médicos completos',
        'Acompanhamento de doenças crônicas',
        'Orientação sobre estilo de vida saudável',
        'Encaminhamento para especialistas',
        'Atestados e receitas médicas'
      ],
      duracao: '45-60 min',
      disponibilidade: 'Seg-Sáb',
      href: '/clinica-geral',
      cor: 'from-blue-500 to-blue-600'
    },
    {
      icon: Microscope,
      title: 'Exames Médicos',
      description: 'Ampla variedade de exames laboratoriais e de imagem para diagnóstico preciso e rápido, com equipamentos modernos.',
      features: [
        'Exames laboratoriais completos',
        'Exames de sangue e urina',
        'Exames cardiológicos (ECG)',
        'Ultrassonografia',
        'Radiografia digital',
        'Resultados em até 24h'
      ],
      duracao: '15-30 min',
      disponibilidade: 'Seg-Sáb',
      href: '/exames',
      cor: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Ginecologia',
      description: 'Cuidado especializado da saúde feminina com profissionais experientes e atendimento humanizado em todas as fases da vida.',
      features: [
        'Consultas ginecológicas de rotina',
        'Exames preventivos (Papanicolau)',
        'Acompanhamento gestacional',
        'Planejamento familiar',
        'Tratamento de infecções',
        'Orientação contraceptiva'
      ],
      duracao: '60 min',
      disponibilidade: 'Seg-Sex',
      href: '/ginecologia',
      cor: 'from-pink-500 to-pink-600'
    }
  ]

  const convenios = [
    'Unimed', 'Bradesco Saúde', 'SulAmérica', 'Amil', 
    'NotreDame Intermédica', 'Porto Seguro', 'Hapvida', 'Particular'
  ]

  const diferenciais = [
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais qualificados e com experiência comprovada'
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Atendimento no horário agendado, respeitando seu tempo'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Protocolos rígidos de higiene e segurança'
    },
    {
      icon: Award,
      title: 'Qualidade',
      description: 'Equipamentos modernos e procedimentos atualizados'
    }
  ]

  const processoAtendimento = [
    {
      numero: '01',
      titulo: 'Agendamento',
      descricao: 'Agende sua consulta online ou por telefone de forma rápida e fácil',
      icon: Calendar
    },
    {
      numero: '02',
      titulo: 'Chegada',
      descricao: 'Chegue com 15 minutos de antecedência para o check-in',
      icon: CheckCircle
    },
    {
      numero: '03',
      titulo: 'Atendimento',
      descricao: 'Receba atendimento personalizado com toda atenção necessária',
      icon: Stethoscope
    },
    {
      numero: '04',
      titulo: 'Acompanhamento',
      descricao: 'Mantenha contato para dúvidas e acompanhamento do tratamento',
      icon: Activity
    }
  ]

  return (
    <div className="min-h-screen pt-32">
      
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
              Nossos <span className="gradient-text bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">Serviços</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Oferecemos uma gama completa de serviços médicos para cuidar da saúde 
              de toda a sua família com excelência, segurança e humanização.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Especialidades <span className="gradient-text">Médicas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada serviço é oferecido com dedicação e qualidade, sempre priorizando 
              o bem-estar e a satisfação dos nossos pacientes.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {servicos.map((servico, index) => {
              const IconComponent = servico.icon
              return (
                <motion.div
                  key={servico.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${servico.cor} rounded-xl mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {servico.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {servico.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {servico.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{servico.duracao}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{servico.disponibilidade}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={servico.href}
                        className="btn-primary flex items-center justify-center space-x-2"
                      >
                        <span>Saiba Mais</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                      
                      <Link
                        to="/contato"
                        className="btn-secondary flex items-center justify-center space-x-2"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Agendar</span>
                      </Link>
                    </div>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <div className={`aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br ${servico.cor}`}>
                        <div className="p-12 flex items-center justify-center">
                          <div className="text-center text-white">
                            <IconComponent className="w-24 h-24 mx-auto mb-6 opacity-80" />
                            <h4 className="text-2xl font-bold mb-2">{servico.title}</h4>
                            <p className="text-lg opacity-90">Atendimento Especializado</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Como <span className="gradient-text">Funciona</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo de atendimento foi pensado para oferecer a melhor 
              experiência desde o agendamento até o acompanhamento.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processoAtendimento.map((etapa, index) => {
              const IconComponent = etapa.icon
              return (
                <motion.div
                  key={etapa.numero}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mx-auto shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">{etapa.numero}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {etapa.titulo}
                  </h3>
                  
                  <p className="text-gray-600">
                    {etapa.descricao}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                Nossos <span className="gradient-text">Diferenciais</span>
              </h2>
              
              <div className="space-y-6">
                {diferenciais.map((diferencial, index) => {
                  const IconComponent = diferencial.icon
                  return (
                    <motion.div
                      key={diferencial.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          {diferencial.title}
                        </h4>
                        <p className="text-gray-600">{diferencial.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center space-x-2">
                  <CreditCard className="w-6 h-6 text-primary-600" />
                  <span>Convênios Aceitos</span>
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {convenios.map((convenio, index) => (
                    <motion.div
                      key={convenio}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-medium">{convenio}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="border-t pt-6">
                  <p className="text-gray-600 mb-4">
                    <strong>Importante:</strong> Verifique a cobertura do seu plano 
                    antes do agendamento. Também atendemos pacientes particulares.
                  </p>
                  
                  <Link
                    to="/contato"
                    className="btn-primary w-full flex items-center justify-center space-x-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Verificar Cobertura</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para cuidar da sua saúde?
            </h2>
            
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Nossa equipe está preparada para oferecer o melhor atendimento médico. 
              Agende sua consulta e experimente nosso cuidado personalizado.
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