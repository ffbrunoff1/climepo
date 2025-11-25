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
    <div className