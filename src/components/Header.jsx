import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock, Heart, Stethoscope, Activity } from 'lucide-react';

const navItems = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/sobre' },
  {
    name: 'Serviços',
    href: '/servicos',
    submenu: [
      { name: 'Clínica Geral', href: '/clinica-geral' },
      { name: 'Exames Médicos', href: '/exames' },
      { name: 'Ginecologia', href: '/ginecologia' }
    ]
  },
  { name: 'Contato', href: '/contato' }
];

const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center space-x-3"
  >
    <div className="relative">
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg">
        <Heart className="w-6 h-6 text-white" />
      </div>
      <Activity className="absolute -top-1 -right-1 w-4 h-4 text-accent-500" />
    </div>
    <div>
      <h1 className="text-2xl font-bold gradient-text">Climepo</h1>
      <p className="text-xs text-gray-500 -mt-1">Cuidando da sua saúde</p>
    </div>
  </motion.div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2"
      >
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(91) 3223-4567</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Belém, PA</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-12 z-50 transition-all duration-300 ${
          scrolled 
            ? 'glass-effect shadow-lg border-b border-gray-200' 
            : 'bg-transparent'
        }`}
      >
        <nav className="container-custom">
          <div className="flex justify-between items-center py-4">
            <Link to="/">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      location.pathname === item.href
                        ? 'text-primary-600 bg-primary-50'
                        : scrolled
                        ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        : 'text-gray-800 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.href && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
                      />
                    )}
                  </Link>
                  
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/contato" className="btn-primary flex items-center space-x-2">
                  <Stethoscope className="w-4 h-4" />
                  <span>Agendar Consulta</span>
                </Link>
              </motion.div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-primary-100 text-primary-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            height: isOpen ? 'auto' : 0
          }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="container-custom py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="ml-4 mt-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <Link 
                to="/contato" 
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Agendar Consulta</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}