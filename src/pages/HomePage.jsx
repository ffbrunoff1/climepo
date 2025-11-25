import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, Activity, Stethoscope, Users, Calendar, 
  Phone, MapPin, Clock, Shield, Award, Star,
  ArrowRight, CheckCircle, UserCheck, Microscope
} from 'lucide-react'

export default function HomePage() {
  const servicos = [
    {
      icon: Stethoscope,
      title: 'Clínica Geral',
      description: 'Atendimento médico geral para toda a família, com foco na prevenção e tratamento de doenças comuns.',
      features: ['Consultas de rotina', 'Check-ups médicos', 'Acompanhamento de saúde'],
      href: '/clinica-geral'
    },
    {
      icon: Microscope,
      title: 'Exames Médicos',
      description: 'Ampla variedade de exames laboratoriais e de imagem para diagnóstico preciso e rápido.',
      features: ['Exames laboratoriais', 'Exames de imagem', 'Resultados rápidos'],
      href: '/exames'
    },
    {
      icon: Heart,
      title: 'Ginecologia',
      description: 'Cuidado especializado da saúde feminina com profissionais experientes e atendimento humanizado.',
      features: ['Consultas ginecológicas', 'Exames preventivos', 'Acompanhamento gestacional'],
      href: '/ginecologia'
    }
  ]

  const diferenciais = [
    {
      icon: Users,
      title: 'Equipe Qualificada',
      description: 'Profissionais experientes e constantemente atualizados'
    },
    {
      icon: Clock,
      title: 'Atendimento Ágil',
      description: 'Consultas pontuais e processo otimizado'
    },
    {
      icon: Shield,
      title: 'Segurança e Confiança',
      description: 'Protocolos rigorosos de segurança e higiene'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Reconhecimento pelos órgãos competentes'
    }
  ]

  const depoimentos = [
    {
      name: 'Maria Silva',
      text: 'Excelente atendimento! Os profissionais são muito atenciosos e o ambiente é acolhedor.',
      rating: 5
    },
    {
      name: 'João Santos',
      text: 'Clínica moderna com equipamentos de qualidade. Recomendo para toda a família.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      text: 'Atendimento humanizado e profissionais competentes. Estou muito satisfeita!',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"></div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-lg rounded-full"
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Cuidando da sua
              <span className="block gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Saúde
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Na Climepo, oferecemos atendimento médico de excelência em clínica geral, 
              exames e ginecologia, sempre com foco no bem-estar dos nossos pacientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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
                <Link to="/servicos" className="btn-secondary bg-white text-primary-600 flex items-center space-x-2 text-lg px-10 py-4">
                  <Stethoscope className="w-5 h-5" />
                  <span>Nossos Serviços</span>
                </Link>
              </motion.div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center space-x-3"
              >
                <Phone className="w-6 h-6 text-blue-200" />
                <div className="text-left">
                  <p className="text-blue-200 text-sm">Emergência</p>
                  <p className="font-semibold">(91) 3223-4567</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-3"
              >
                <MapPin className="w-6 h-6 text-blue-200" />
                <div className="text-left">
                  <p className="text-blue-200 text-sm">Localização</p>
                  <p className="font-semibold">Belém, PA</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex items-center space-x-3"
              >
                <Clock className="w-6 h-6 text-blue-200" />
                <div className="text-left">
                  <p className="text-blue-200 text-sm">Funcionamento</p>
                  <p className="font-semibold">Seg-Sáb</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
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
              Nossos <span className="gradient-text">Serviços</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de serviços médicos para cuidar da saúde 
              de toda a sua família com excelência e dedicação.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => {
              const IconComponent = servico.icon
              return (
                <motion.div
                  key={servico.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="card p-8"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-6 mx-auto">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    {servico.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    {servico.description}
                  </p>
                  
                  <ul className="space-y-2 mb-8">
                    {servico.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={servico.href}
                    className="flex items-center justify-center space-x-2 w-full btn-primary"
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )
            })}
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
              Por que escolher a <span className="gradient-text">Climepo</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso compromisso é oferecer o melhor atendimento médico, 
              sempre priorizando sua saúde e bem-estar.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((diferencial, index) => {
              const IconComponent = diferencial.icon
              return (
                <motion.div
                  key={diferencial.title}
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
                    {diferencial.title}
                  </h3>
                  
                  <p className="text-gray-600">
                    {diferencial.description}
                  </p>
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
              O que nossos <span className="gradient-text">pacientes</span> dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A satisfação dos nossos pacientes é nossa maior motivação. 
              Confira alguns depoimentos de quem confia na Climepo.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <motion.div
                key={depoimento.name}
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
                  "{depoimento.text}"
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4">
                    <UserCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">{depoimento.name}</p>
                    <p className="text-sm text-gray-500">Paciente</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para cuidar da sua saúde?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Agende sua consulta hoje mesmo e tenha acesso ao melhor atendimento 
              médico em Belém. Nossa equipe está pronta para cuidar de você!
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