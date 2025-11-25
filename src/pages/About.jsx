import React from 'react'
import { motion } from 'framer-motion'
import { 
  Heart, Activity, Users, Award, Shield, Clock, 
  Stethoscope, CheckCircle, Target, Eye, Star,
  Calendar, Phone, MapPin, ArrowRight
} from 'lucide-react'

export default function About() {
  const valores = [
    {
      icon: Heart,
      title: 'Humanização',
      description: 'Tratamos cada paciente com carinho, respeito e atenção individual, sempre priorizando o bem-estar.'
    },
    {
      icon: Shield,
      title: 'Segurança',
      description: 'Mantemos os mais altos padrões de segurança e higiene em todos os nossos procedimentos.'
    },
    {
      icon: Star,
      title: 'Excelência',
      description: 'Buscamos constantemente a excelência em todos os aspectos do nosso atendimento médico.'
    },
    {
      icon: Users,
      title: 'Dedicação',
      description: 'Nossa equipe é dedicada e comprometida com a saúde e satisfação dos nossos pacientes.'
    }
  ]

  const numeros = [
    { numero: '15+', label: 'Anos de Experiência', icon: Calendar },
    { numero: '10,000+', label: 'Pacientes Atendidos', icon: Users },
    { numero: '99%', label: 'Satisfação dos Pacientes', icon: Heart },
    { numero: '24h', label: 'Atendimento de Emergência', icon: Clock }
  ]

  const diferenciais = [
    'Atendimento humanizado e personalizado',
    'Profissionais altamente qualificados',
    'Tecnologia moderna e equipamentos de ponta',
    'Ambiente acolhedor e confortável',
    'Agendamento online facilitado',
    'Convênios com principais planos de saúde',
    'Localização privilegiada em Belém',
    'Horários flexíveis de atendimento'
  ]

  const certificacoes = [
    { title: 'CRM - Conselho Regional de Medicina', icon: Shield },
    { title: 'ISO 9001 - Gestão da Qualidade', icon: Award },
    { title: 'ANVISA - Vigilância Sanitária', icon: CheckCircle },
    { title: 'CFM - Conselho Federal de Medicina', icon: Star }
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
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sobre a <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Climepo</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Há mais de 15 anos, a Climepo tem sido referência em cuidados médicos 
              em Belém, oferecendo atendimento de excelência em clínica geral, exames 
              e ginecologia com foco no bem-estar dos nossos pacientes.
            </p>
          </motion.div>
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Nossa <span className="gradient-text">História</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A Climepo nasceu com o propósito de transformar o atendimento médico 
                  em Belém, oferecendo cuidados de saúde de alta qualidade com um 
                  toque humano especial. Desde nossa fundação, temos nos dedicado a 
                  criar um ambiente onde os pacientes se sintam acolhidos e seguros.
                </p>
                
                <p>
                  Nossa jornada começou com um pequeno consultório e o sonho de fazer 
                  a diferença na vida das pessoas. Hoje, somos uma clínica completa 
                  com equipe multidisciplinar e tecnologia de ponta, mas mantemos os 
                  mesmos valores que nos guiaram desde o início.
                </p>
                
                <p>
                  Ao longo dos anos, expandimos nossos serviços para atender melhor 
                  às necessidades da comunidade, sempre priorizando a qualidade, 
                  segurança e humanização do atendimento médico.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-primary-100 to-blue-100 p-12">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <Activity className="w-24 h-24 text-primary-600 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">15 Anos</h3>
                      <p className="text-gray-600">de dedicação à saúde</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Missão, Visão e <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa filosofia está centrada no paciente e guia todas as nossas ações 
              e decisões no dia a dia da clínica.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card p-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-6 mx-auto">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Oferecer cuidados médicos de excelência, promovendo a saúde e 
                o bem-estar dos nossos pacientes com atendimento humanizado, 
                ético e de qualidade.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mb-6 mx-auto">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como a clínica médica de referência em Belém, 
                conhecida pela excelência no atendimento e pela confiança que 
                inspiramos em nossos pacientes.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-8 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl mb-6 mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Humanização, ética, respeito, segurança, excelência e compromisso 
                com a saúde e satisfação dos nossos pacientes e suas famílias.
              </p>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => {
              const IconComponent = valor.icon
              return (
                <motion.div
                  key={valor.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-4 mx-auto shadow-lg"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{valor.title}</h4>
                  <p className="text-gray-600 text-sm">{valor.description}</p>
                </motion.div>
              )
            })}
          </div>
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
              Nossos <span className="gradient-text">Números</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que refletem nossa dedicação e o reconhecimento dos nossos pacientes 
              ao longo de mais de uma década de atuação.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {numeros.map((numero, index) => {
              const IconComponent = numero.icon
              return (
                <motion.div
                  key={numero.label}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card p-8 text-center"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                    {numero.numero}
                  </h3>
                  <p className="text-gray-600 font-medium">{numero.label}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {diferenciais.map((diferencial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{diferencial}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Certificações e Reconhecimentos
                </h3>
                
                {certificacoes.map((cert, index) => {
                  const IconComponent = cert.icon
                  return (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{cert.title}</span>
                    </motion.div>
                  )
                })}
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
            <Stethoscope className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Conheça nossa clínica pessoalmente
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Venha nos visitar e conheça nossa estrutura, nossa equipe e tudo que 
              preparamos com carinho para cuidar da sua saúde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/contato" 
                  className="btn-outline flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Nossa Localização</span>
                </a>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="tel:+559132234567" 
                  className="btn-secondary bg-white text-primary-600 flex items-center space-x-2 text-lg px-8 py-4"
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