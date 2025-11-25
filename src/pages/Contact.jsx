import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ReCAPTCHA from 'react-google-recaptcha'
import { 
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  Calendar, Heart, Stethoscope, Activity, AlertCircle
} from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        "recipientEmail": "",
        "token": token
      }
      
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      
      if (response.ok) {
        setStatus({ 
          message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 
          isError: false 
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          service: ''
        })
      } else {
        throw new Error('Erro ao enviar mensagem')
      }
    } catch (error) {
      setStatus({ 
        message: 'Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.', 
        isError: true 
      })
    } finally {
      setIsLoading(false)
      recaptchaRef.current.reset()
      
      setTimeout(() => {
        setStatus({ message: '', isError: false })
      }, 5000)
    }
  }

  const contatos = [
    {
      icon: Phone,
      title: 'Telefone',
      info: '(91) 3223-4567',
      description: 'Seg-Sex: 8h-18h | Sáb: 8h-12h',
      link: 'tel:+559132234567',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'contato@climepo.com',
      description: 'Resposta em até 24h',
      link: 'mailto:contato@climepo.com',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      info: 'Belém, Pará',
      description: 'Fácil acesso e estacionamento',
      link: '#',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Funcionamento',
      info: 'Segunda à Sábado',
      description: '8h às 18h | Sáb até 12h',
      link: '#',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const servicos = [
    { value: 'clinica-geral', label: 'Clínica Geral' },
    { value: 'exames', label: 'Exames Médicos' },
    { value: 'ginecologia', label: 'Ginecologia' },
    { value: 'emergencia', label: 'Emergência' },
    { value: 'outros', label: 'Outros' }
  ]

  const horarios = [
    'Segunda-feira: 8:00 - 18:00',
    'Terça-feira: 8:00 - 18:00',
    'Quarta-feira: 8:00 - 18:00',
    'Quinta-feira: 8:00 - 18:00',
    'Sexta-feira: 8:00 - 18:00',
    'Sábado: 8:00 - 12:00',
    'Domingo: Fechado'
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
                <Phone className="w-10 h-10 text-white" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Entre em <span className="gradient-text bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Contato</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Estamos aqui para cuidar da sua saúde. Entre em contato conosco para 
              agendar sua consulta ou esclarecer suas dúvidas.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contatos.map((contato, index) => {
              const IconComponent = contato.icon
              return (
                <motion.a
                  key={contato.title}
                  href={contato.link}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="card p-6 text-center group cursor-pointer"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${contato.color} rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {contato.title}
                  </h3>
                  
                  <p className="text-gray-600 font-medium mb-2">
                    {contato.info}
                  </p>
                  
                  <p className="text-sm text-gray-500">
                    {contato.description}
                  </p>
                </motion.a>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="w-6 h-6 text-primary-600" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Agende sua Consulta
                  </h2>
                </div>
                
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e nossa equipe entrará em contato 
                  para confirmar seu agendamento. Todas as informações são tratadas 
                  com total sigilo e segurança.
                </p>

                {status.message && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center space-x-2 p-4 rounded-lg mb-6 ${
                      status.isError 
                        ? 'bg-red-50 text-red-600 border border-red-200' 
                        : 'bg-green-50 text-green-600 border border-green-200'
                    }`}
                  >
                    {status.isError ? (
                      <AlertCircle className="w-5 h-5" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="(91) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      {servicos.map((servico) => (
                        <option key={servico.value} value={servico.value}>
                          {servico.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="Assunto da sua mensagem"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                      placeholder="Descreva sua necessidade, sintomas ou dúvidas..."
                    />
                  </div>

                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                    size="invisible"
                  />

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                    <span>{isLoading ? 'Enviando...' : 'Enviar Mensagem'}</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Horários de Funcionamento
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {horarios.map((horario, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-gray-600">{horario.split(':')[0]}:</span>
                      <span className="font-semibold text-gray-800">{horario.split(':').slice(1).join(':')}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-600">
                    <strong>Emergências:</strong> Para emergências médicas, 
                    ligue diretamente para nosso número de atendimento 24h.
                  </p>
                </div>
              </div>

              <div className="card p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Stethoscope className="w-6 h-6 text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Como Agendar
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Preencha o Formulário</h4>
                      <p className="text-gray-600 text-sm">Informe seus dados e descreva sua necessidade</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Confirmação</h4>
                      <p className="text-gray-600 text-sm">Nossa equipe entrará em contato em até 2h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary-500 rounded-full flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Sua Consulta</h4>
                      <p className="text-gray-600 text-sm">Compareça na data e horário agendados</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8 bg-gradient-to-br from-primary-50 to-blue-50 border border-primary-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Activity className="w-6 h-6 text-primary-600" />
                  <h3 className="text-lg font-bold text-primary-800">
                    Atendimento de Emergência
                  </h3>
                </div>
                
                <p className="text-primary-700 mb-4 text-sm">
                  Para casos de emergência médica, ligue imediatamente:
                </p>
                
                <a 
                  href="tel:+559132234567"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>(91) 3223-4567</span>
                </a>
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
            <MapPin className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Visite Nossa Clínica
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Nossa clínica está localizada em uma região de fácil acesso em Belém, 
              com estacionamento próprio e ambiente moderno e acolhedor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="#" 
                  className="btn-outline flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Ver no Mapa</span>
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
                  <span>Ligar Agora</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}