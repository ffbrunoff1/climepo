import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Heart, Activity, Phone, Mail, MapPin, Clock, 
  Facebook, Instagram, Youtube, Shield, Award,
  Stethoscope, Users, CalendarDays
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const Logo = () => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-3"
    >
      <div className="relative">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-white to-blue-50 rounded-xl shadow-lg">
          <Heart className="w-6 h-6 text-primary-600" />
        </div>
        <Activity className="absolute -top-1 -right-1 w-4 h-4 text-accent-500" />
      </div>
      <div>
        <h1 className="text-2xl font-bold text-white">Climepo</h1>
        <p className="text-xs text-blue-200 -mt-1">Cuidando da sua saúde</p>
      </div>
    </motion.div>
  )

  const servicos = [
    { name: 'Clínica Geral', href: '/clinica-geral', icon: Stethoscope },
    { name: 'Exames Médicos', href: '/exames', icon: Activity },
    { name: 'Ginecologia', href: '/ginecologia', icon: Heart },
    { name: 'Agendamento Online', href: '/contato', icon: CalendarDays }
  ]

  const informacoes = [
    { name: 'Sobre a Climepo', href: '/sobre', icon: Users },
    { name: 'Nossa Equipe', href: '/sobre', icon: Users },
    { name: 'Convênios', href: '/servicos', icon: Shield },
    { name: 'Certificações', href: '/sobre', icon: Award }
  ]

  const contatos = [
    { icon: Phone, text: '(91) 3223-4567', link: 'tel:+559132234567' },
    { icon: Mail, text: 'contato@climepo.com', link: 'mailto:contato@climepo.com' },
    { icon: MapPin, text: 'Belém, Pará', link: '#' },
    { icon: Clock, text: 'Seg-Sex: 8h-18h | Sáb: 8h-12h', link: '#' }
  ]

  const redesSociais = [
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white pb-20">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <Logo />
            <p className="text-green-200 leading-relaxed">
              Há mais de 15 anos cuidando da saúde das famílias de Belém. 
              Oferecemos atendimento médico de qualidade com profissionais 
              qualificados e tecnologia moderna.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-sm text-blue-200">Certificado CRM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm text-blue-200">ISO 9001</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Stethoscope className="w-5 h-5" />
              <span>Nossos Serviços</span>
            </h3>
            <ul className="space-y-4">
              {servicos.map((servico) => {
                const IconComponent = servico.icon
                return (
                  <li key={servico.name}>
                    <Link
                      to={servico.href}
                      className="flex items-center space-x-3 text-green-200 hover:text-white transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {servico.name}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span>Informações</span>
            </h3>
            <ul className="space-y-4">
              {informacoes.map((info) => {
                const IconComponent = info.icon
                return (
                  <li key={info.name}>
                    <Link
                      to={info.href}
                      className="flex items-center space-x-3 text-green-200 hover:text-white transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {info.name}
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>Contato</span>
            </h3>
            <ul className="space-y-4 mb-6">
              {contatos.map((contato, index) => {
                const IconComponent = contato.icon
                return (
                  <li key={index}>
                    <a
                      href={contato.link}
                      className="flex items-center space-x-3 text-green-200 hover:text-white transition-colors duration-300 group"
                    >
                      <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {contato.text}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>

            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex items-center space-x-4">
                {redesSociais.map((rede) => {
                  const IconComponent = rede.icon
                  return (
                    <motion.a
                      key={rede.label}
                      href={rede.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-white bg-opacity-20 rounded-lg flex items-center justify-center hover:bg-opacity-30 transition-all duration-300"
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-blue-600 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-green-200">
              <p>&copy; {currentYear} Climepo. Todos os direitos reservados.</p>
              <a 
                href="https://papum.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Criado com <em>Papum</em>
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-green-200">
              <Link to="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}