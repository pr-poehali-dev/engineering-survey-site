import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    file: null as File | null
  });

  const services = [
    {
      icon: 'Mountain',
      title: 'Инженерно-геологические изыскания',
      description: 'Комплексное изучение геологического строения участка, физико-механических свойств грунтов'
    },
    {
      icon: 'Droplets',
      title: 'Инженерно-гидрометеорологические изыскания',
      description: 'Исследование гидрологического режима, уровня грунтовых вод, метеорологических условий'
    },
    {
      icon: 'Leaf',
      title: 'Инженерно-экологические изыскания',
      description: 'Оценка экологического состояния территории, анализ загрязнений почв и подземных вод'
    },
    {
      icon: 'Building2',
      title: 'Инженерно-геодезические изыскания',
      description: 'Топографическая съемка местности, создание цифровых моделей рельефа, разбивочные работы'
    },
    {
      icon: 'ScanSearch',
      title: 'Обследование зданий и сооружений',
      description: 'Техническое обследование несущих конструкций, дефектоскопия, оценка технического состояния объектов'
    }
  ];

  const equipment = [
    { name: 'Электронный тахеометр Leica TS16', specs: 'Точность ±1" угловые измерения' },
    { name: 'GPS/GNSS приемник Trimble R10', specs: 'RTK точность ±8 мм + 1 ppm' },
    { name: 'Георадар "Око-3"', specs: 'Глубина зондирования до 30 м' },
    { name: 'Буровая установка УРБ-2А2', specs: 'Глубина бурения до 50 м' }
  ];

  const projects = [
    {
      title: 'ЖК "Северный"',
      location: 'Москва',
      area: '12 га',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/609beaf5-e415-4bad-80be-8b1504d943c5/files/ce9e3d57-a831-48c7-8323-f1d5314e3281.jpg'
    },
    {
      title: 'Торговый центр "Европа"',
      location: 'Санкт-Петербург',
      area: '8 га',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/609beaf5-e415-4bad-80be-8b1504d943c5/files/ff235c99-0abc-456c-a521-e962575811c2.jpg'
    },
    {
      title: 'Промышленный комплекс',
      location: 'Казань',
      area: '25 га',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/609beaf5-e415-4bad-80be-8b1504d943c5/files/e9cec2ce-24e2-439c-90dc-a6701a7d8d9c.jpg'
    }
  ];

  const certificates = [
    'СРО-И-037-26062015 - Инженерные изыскания для подготовки проектной документации',
    'ISO 9001:2015 - Система менеджмента качества',
    'Аккредитация лаборатории РОСС RU.0001.21ПТ88',
    'Допуск к работам на объектах использования атомной энергии'
  ];

  const testimonials = [
    {
      name: 'Алексей Петров',
      position: 'Главный инженер',
      company: 'ООО "СтройГрад"',
      text: 'Сотрудничаем с ГеоПроект уже 5 лет. Высокое качество изысканий, точные сроки, профессиональная команда. Особенно отмечу оперативность и готовность помочь в сложных ситуациях.',
      rating: 5
    },
    {
      name: 'Мария Соколова',
      position: 'Директор по развитию',
      company: 'Группа компаний "Базис"',
      text: 'Провели обследование 12 зданий для проекта реконструкции. Получили полный комплект документов в срок. Техническая экспертиза на высшем уровне, рекомендуем!',
      rating: 5
    },
    {
      name: 'Дмитрий Новиков',
      position: 'Технический директор',
      company: 'ЗАО "МегаСтрой"',
      text: 'Профессиональный подход к инженерно-геологическим изысканиям. Современное оборудование, квалифицированные специалисты. Результаты работ всегда соответствуют требованиям проектирования.',
      rating: 5
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', email: '', phone: '', company: '', message: '', file: null });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <nav className="bg-secondary text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="CircleDot" size={32} className="text-primary" />
              <span className="text-2xl font-bold">ГеоПроект</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
              <a href="#licenses" className="hover:text-primary transition-colors">Лицензии</a>
              <a href="#equipment" className="hover:text-primary transition-colors">Оборудование</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="hidden md:block">
              <Button variant="outline" className="bg-white text-secondary hover:bg-primary hover:text-white">
                +7 (495) 123-45-67
              </Button>
            </div>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-white">
                  <Icon name="Menu" size={28} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-secondary text-white border-secondary">
                <div className="flex flex-col space-y-6 mt-8">
                  <a 
                    href="#services" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Услуги
                  </a>
                  <a 
                    href="#projects" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Проекты
                  </a>
                  <a 
                    href="#licenses" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Лицензии
                  </a>
                  <a 
                    href="#equipment" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Оборудование
                  </a>
                  <a 
                    href="#contact" 
                    className="text-lg hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Контакты
                  </a>
                  <div className="pt-4 border-t border-white/20">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      <Icon name="Phone" size={20} className="mr-2" />
                      +7 (495) 123-45-67
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      <section className="relative bg-gradient-to-r from-secondary via-secondary/95 to-primary py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px), repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.1) 50px, rgba(255,255,255,0.1) 51px)'
          }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Инженерные изыскания для строительства
            </h1>
            <p className="text-xl text-slate-100 mb-8">
              Полный комплекс инженерно-геологических, геодезических, экологических и гидрометеорологических изысканий
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-xl">
                <Icon name="FileText" size={20} className="mr-2" />
                Оставить заявку
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр инженерных изысканий для объектов любой сложности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                Обследование зданий и сооружений
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-lg text-muted-foreground mb-6">
                Проводим комплексное техническое обследование зданий и сооружений любой сложности с применением современного оборудования и методик.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="Search" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Визуальное обследование</h3>
                    <p className="text-sm text-muted-foreground">Осмотр конструктивных элементов, выявление дефектов и повреждений</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="Activity" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Инструментальное обследование</h3>
                    <p className="text-sm text-muted-foreground">Прочность бетона, арматуры, несущей способности конструкций</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="ClipboardCheck" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Техническое заключение</h3>
                    <p className="text-sm text-muted-foreground">Оценка технического состояния, рекомендации по усилению и ремонту</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-primary/10 rounded-lg mt-1">
                    <Icon name="FileText" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Проектная документация</h3>
                    <p className="text-sm text-muted-foreground">Разработка проектов усиления и реконструкции объектов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                  <Icon name="Home" size={40} className="text-primary" />
                </div>
                <h4 className="font-bold text-2xl text-secondary mb-2">500+</h4>
                <p className="text-sm text-muted-foreground">Обследованных объектов</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                  <Icon name="Award" size={40} className="text-primary" />
                </div>
                <h4 className="font-bold text-2xl text-secondary mb-2">15 лет</h4>
                <p className="text-sm text-muted-foreground">Опыта работы</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                  <Icon name="Users" size={40} className="text-primary" />
                </div>
                <h4 className="font-bold text-2xl text-secondary mb-2">30+</h4>
                <p className="text-sm text-muted-foreground">Специалистов</p>
              </Card>
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-3">
                  <Icon name="Clock" size={40} className="text-primary" />
                </div>
                <h4 className="font-bold text-2xl text-secondary mb-2">24/7</h4>
                <p className="text-sm text-muted-foreground">Техподдержка</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Реализованные проекты</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>
                    <div className="space-y-1 mt-2">
                      <div className="flex items-center text-sm">
                        <Icon name="MapPin" size={16} className="mr-2 text-primary" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Icon name="Maximize" size={16} className="mr-2 text-primary" />
                        Площадь: {project.area}
                      </div>
                      <div className="flex items-center text-sm">
                        <Icon name="Calendar" size={16} className="mr-2 text-primary" />
                        {project.year}
                      </div>
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="licenses" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Лицензии и сертификаты</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certificates.map((cert, index) => (
              <Card key={index} className="border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Shield" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm leading-relaxed">{cert}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Нам доверяют ведущие строительные компании России
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3 border-t pt-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20 bg-slate-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Оборудование</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Современное высокоточное оборудование ведущих мировых производителей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipment.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="p-4 bg-primary/10 rounded-lg w-fit mb-3">
                    <Icon name="Ruler" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="text-sm">{item.specs}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Онлайн-заявка</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Отправьте заявку с техническим заданием, и мы свяжемся с вами в течение часа
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl border-t-4 border-t-primary">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Иван Иванов"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Компания</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ООО «Строй»"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@mail.ru"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Описание задачи</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите, какие изыскания вам необходимы"
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="file">Техническое задание (необязательно)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        id="file"
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.zip"
                        className="cursor-pointer"
                      />
                      {formData.file && (
                        <Icon name="CheckCircle" size={20} className="text-green-600" />
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Поддерживаемые форматы: PDF, DOC, DOCX, ZIP (макс. 10 МБ)
                    </p>
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="CircleDot" size={28} className="text-primary" />
                <span className="text-xl font-bold">ГеоПроект</span>
              </div>
              <p className="text-slate-300 text-sm">
                Инженерные изыскания для строительства с 2008 года
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@geoproekt.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, д. 1</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>Геологические изыскания</li>
                <li>Геодезические изыскания</li>
                <li>Экологические изыскания</li>
                <li>Гидрометеорологические</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>О компании</li>
                <li>Лицензии и допуски</li>
                <li>Вакансии</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-600 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 ГеоПроект. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;