USE [master]
GO
/****** Object:  Database [Portfolio]    Script Date: 02.08.2018 18:20:52 ******/
CREATE DATABASE [Portfolio]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Portfolio', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\Portfolio.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'Portfolio_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\Portfolio_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [Portfolio] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Portfolio].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Portfolio] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Portfolio] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Portfolio] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Portfolio] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Portfolio] SET ARITHABORT OFF 
GO
ALTER DATABASE [Portfolio] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Portfolio] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Portfolio] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Portfolio] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Portfolio] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Portfolio] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Portfolio] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Portfolio] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Portfolio] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Portfolio] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Portfolio] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Portfolio] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Portfolio] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Portfolio] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Portfolio] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Portfolio] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Portfolio] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Portfolio] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [Portfolio] SET  MULTI_USER 
GO
ALTER DATABASE [Portfolio] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Portfolio] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Portfolio] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Portfolio] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [Portfolio] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [Portfolio] SET QUERY_STORE = OFF
GO
USE [Portfolio]
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
USE [Portfolio]
GO
/****** Object:  Table [dbo].[AboutMe]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AboutMe](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](50) NULL,
	[Birth] [int] NULL,
	[Phone] [nvarchar](30) NULL,
	[Email] [nvarchar](50) NULL,
	[Address] [nvarchar](200) NULL,
	[Photo] [nvarchar](200) NULL,
	[CV] [nvarchar](200) NULL,
	[Position] [nvarchar](200) NULL,
	[Text] [text] NULL,
	[Lang] [nvarchar](15) NULL,
 CONSTRAINT [PK_AboutMe] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AdminsData]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdminsData](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Email] [nvarchar](50) NULL,
	[Password] [nvarchar](200) NULL,
	[FullName] [nvarchar](30) NULL,
 CONSTRAINT [PK_AdminsData] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Gallery]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gallery](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Media] [nvarchar](100) NULL,
	[PortfolioId] [int] NULL,
	[Lang] [nvarchar](15) NULL,
 CONSTRAINT [PK_Gallery] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Knowledge]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Knowledge](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](30) NULL,
	[Icon] [nvarchar](30) NULL,
	[IsIcon] [bit] NULL,
 CONSTRAINT [PK_Knowledge] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Language]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Language](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Lang] [nvarchar](20) NULL,
	[LangAbbr] [nvarchar](6) NULL,
 CONSTRAINT [PK_Language] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Messages]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Messages](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NULL,
	[Email] [nvarchar](100) NULL,
	[Subject] [nvarchar](200) NULL,
	[Text] [text] NULL,
	[Date] [datetime] NULL,
 CONSTRAINT [PK_Messages] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Portfolio]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Portfolio](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NULL,
	[Slogan] [nvarchar](150) NULL,
	[CategoryId] [int] NULL,
	[Lang] [nvarchar](15) NULL,
	[Date] [datetime] NULL,
 CONSTRAINT [PK_Portfolio] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Skills]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Skills](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](30) NULL,
	[Percentage] [tinyint] NULL,
 CONSTRAINT [PK_Skills] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Social]    Script Date: 02.08.2018 18:20:53 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Social](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Icon] [nvarchar](50) NULL,
	[Link] [nvarchar](150) NULL,
 CONSTRAINT [PK_Social] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[AboutMe] ON 

INSERT [dbo].[AboutMe] ([Id], [FullName], [Birth], [Phone], [Email], [Address], [Photo], [CV], [Position], [Text], [Lang]) VALUES (1, N'Shohrat Maharram', 1992, N'+994 50 760 2822', N'shohret550@gmail.com', N'Binagadi, Baku / Azerbaijan', N'port.png', N'Resume_shohrat v.2.1..pdf', N'Software Developer', N'We are Biobo, our strategists will help you set an objective and choose your tools, developing a plan that is custom built for your business. We make sure to provides unlimited collection of options, elements & creative shortcode lists. All Whole elements can be easily styled, edited and modified in little easy steps to save your time!', N'en')
INSERT [dbo].[AboutMe] ([Id], [FullName], [Birth], [Phone], [Email], [Address], [Photo], [CV], [Position], [Text], [Lang]) VALUES (2, N'Shohrat Maharram', 1992, N'+994 50 760 2822', N'shohret550@gmail.com', N'Binəqədi, Bakı / Azərbaycan', N'me2.png', N'Resume_shohrat v.2.1..pdf', N'Software Developer', N'We are Biobo, our strategists will help you set an objective and choose your tools, developing a plan that is custom built for your business. We make sure to provides unlimited collection of options, elements & creative shortcode lists. All Whole elements can be easily styled, edited and modified in little easy steps to save your time!', N'az')
SET IDENTITY_INSERT [dbo].[AboutMe] OFF
SET IDENTITY_INSERT [dbo].[AdminsData] ON 

INSERT [dbo].[AdminsData] ([Id], [Email], [Password], [FullName]) VALUES (1, N'shohret550@gmail.com', N'AHekxMLM7t84S8zR3oJkdw64SP+ikFr0n4q8rjySUIAw49rdcFvnr7XAAvIXzEhC8w==', N'Shohrat Maharram')
INSERT [dbo].[AdminsData] ([Id], [Email], [Password], [FullName]) VALUES (2, N'rasim@rasim.com', N'ACVhfM3HO0k1w8wZcHsjK3Kz41tlUcMddvXTGENtLyR2ZuGAKrvAR1DApO0EBpDm5Q==', N'Rasim Xasayli')
SET IDENTITY_INSERT [dbo].[AdminsData] OFF
SET IDENTITY_INSERT [dbo].[Categories] ON 

INSERT [dbo].[Categories] ([Id], [Name]) VALUES (1, N'FULL-STACK')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (2, N'FRONT-END')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (3, N'BACK-END')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (4, N'DESKTOP')
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (5, N'OTHER')
SET IDENTITY_INSERT [dbo].[Categories] OFF
SET IDENTITY_INSERT [dbo].[Gallery] ON 

INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (1, N'11.jpg', 1, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (2, N'21.jpg', 1, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (3, N'31.jpg', 1, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (4, N'41.jpg', 1, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (5, N'21.jpg', 2, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (6, N'31.jpg', 2, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (7, N'41.jpg', 2, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (8, N'51.jpg', 2, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (9, N'31.jpg', 3, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (10, N'41.jpg', 3, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (11, N'51.jpg', 3, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (12, N'61.jpg', 3, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (13, N'41.jpg', 4, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (14, N'51.jpg', 4, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (15, N'61.jpg', 4, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (16, N'71.jpg', 4, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (17, N'51.jpg', 5, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (18, N'61.jpg', 5, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (19, N'71.jpg', 5, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (20, N'11.jpg', 5, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (21, N'61.jpg', 6, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (22, N'71.jpg', 6, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (23, N'11.jpg', 6, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (24, N'21.jpg', 6, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (25, N'71.jpg', 7, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (26, N'11.jpg', 7, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (27, N'21.jpg', 7, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (28, N'31.jpg', 7, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (29, N'31.jpg', 8, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (30, N'41.jpg', 8, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (31, N'51.jpg', 8, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (32, N'61.jpg', 8, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (33, N'7.mp4', 1, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (34, N'7.mp4', 3, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (35, N'7.mp4', 5, N'en')
INSERT [dbo].[Gallery] ([Id], [Media], [PortfolioId], [Lang]) VALUES (36, N'7.mp4', 7, N'en')
SET IDENTITY_INSERT [dbo].[Gallery] OFF
SET IDENTITY_INSERT [dbo].[Knowledge] ON 

INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (1, N'HTML', N'html5', 1)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (2, N'CSS', N'css3-alt', 1)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (3, N'JS', N'js-square', 1)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (4, N'C#', N'csh.png', 0)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (5, N'ASP.NET', N'asp.png', 0)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (6, N'SQL', N'sql.ico', 0)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (7, N'Data Analysing', N'da.png', 0)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (8, N'Excel', N'excel.png', 0)
INSERT [dbo].[Knowledge] ([Id], [Name], [Icon], [IsIcon]) VALUES (9, N'Project Management', N'pm2.png', 0)
SET IDENTITY_INSERT [dbo].[Knowledge] OFF
SET IDENTITY_INSERT [dbo].[Language] ON 

INSERT [dbo].[Language] ([Id], [Lang], [LangAbbr]) VALUES (1, N'Azerbaijani', N'az')
INSERT [dbo].[Language] ([Id], [Lang], [LangAbbr]) VALUES (2, N'English', N'en')
INSERT [dbo].[Language] ([Id], [Lang], [LangAbbr]) VALUES (3, N'Russian', N'ru')
SET IDENTITY_INSERT [dbo].[Language] OFF
SET IDENTITY_INSERT [dbo].[Messages] ON 

INSERT [dbo].[Messages] ([Id], [Name], [Email], [Subject], [Text], [Date]) VALUES (1, N'Rasim', N'mshohrat.p501@code.edu.az', N'Test1-Ajax', N'Mu mesaj hemde db ye yazilirMu mesaj hemde db ye yazilirMu mesaj hemde db ye yazilirMu mesaj hemde db ye yazilirMu mesaj hemde db ye yazilirMu mesaj hemde db ye yazilir', CAST(N'2018-07-22T23:26:32.000' AS DateTime))
INSERT [dbo].[Messages] ([Id], [Name], [Email], [Subject], [Text], [Date]) VALUES (11, N'Shohrat Maharram', N'mshohrat.p501@code.edu.az', N'Test Admi Panel', N'Salam Atminn', CAST(N'2018-02-08T15:40:51.000' AS DateTime))
INSERT [dbo].[Messages] ([Id], [Name], [Email], [Subject], [Text], [Date]) VALUES (19, N'Rasim', N'mshohrat.p501@code.edu.az', N'Test', N'sdvfdfv', CAST(N'2018-02-08T15:59:11.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Messages] OFF
SET IDENTITY_INSERT [dbo].[Portfolio] ON 

INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (1, N'Coffee delivery', N'Coffee delivery Website', 1, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (2, N'Colculating Internship', N'Coffee delivery Website', 2, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (3, N'Coffee delivery', N'Coffee delivery Website', 3, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (4, N'Coffee delivery', N'Coffee delivery Website', 5, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (5, N'Coffee delivery', N'Coffee delivery Website', 4, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (6, N'Coffee delivery', N'Coffee delivery Website', 3, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (7, N'Colculating Internship', N'Coffee delivery Website', 2, N'en', NULL)
INSERT [dbo].[Portfolio] ([Id], [Name], [Slogan], [CategoryId], [Lang], [Date]) VALUES (8, N'Coffee delivery', N'Coffee delivery Website', 1, N'en', NULL)
SET IDENTITY_INSERT [dbo].[Portfolio] OFF
SET IDENTITY_INSERT [dbo].[Skills] ON 

INSERT [dbo].[Skills] ([Id], [Name], [Percentage]) VALUES (1, N'C#, ASP.NET MVC, ADO.NET', 80)
INSERT [dbo].[Skills] ([Id], [Name], [Percentage]) VALUES (2, N'HTML', 95)
INSERT [dbo].[Skills] ([Id], [Name], [Percentage]) VALUES (3, N'CSS, SASS, Bootstrap', 95)
INSERT [dbo].[Skills] ([Id], [Name], [Percentage]) VALUES (4, N'JS, JQuery, AJAX, JSON', 80)
INSERT [dbo].[Skills] ([Id], [Name], [Percentage]) VALUES (5, N'MS SQL Server, SQL', 85)
INSERT [dbo].[Skills] ([Id], [Name], [Percentage]) VALUES (6, N'Github, MeisterTASK', 90)
SET IDENTITY_INSERT [dbo].[Skills] OFF
SET IDENTITY_INSERT [dbo].[Social] ON 

INSERT [dbo].[Social] ([Id], [Icon], [Link]) VALUES (1, N'linkedin-in', N'https://www.linkedin.com/in/shohrat-maharram')
INSERT [dbo].[Social] ([Id], [Icon], [Link]) VALUES (2, N'twitter', N'https://twitter.com/ShohratMaharram')
INSERT [dbo].[Social] ([Id], [Icon], [Link]) VALUES (3, N'facebook-f', N'https://www.facebook.com/shohrat.maharram')
INSERT [dbo].[Social] ([Id], [Icon], [Link]) VALUES (4, N'skype', N'https://hatscripts.com/addskype/?shohret550')
SET IDENTITY_INSERT [dbo].[Social] OFF
ALTER TABLE [dbo].[Gallery]  WITH CHECK ADD  CONSTRAINT [FK_Gallery_Portfolio] FOREIGN KEY([PortfolioId])
REFERENCES [dbo].[Portfolio] ([Id])
GO
ALTER TABLE [dbo].[Gallery] CHECK CONSTRAINT [FK_Gallery_Portfolio]
GO
ALTER TABLE [dbo].[Portfolio]  WITH CHECK ADD  CONSTRAINT [FK_Portfolio_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Portfolio] CHECK CONSTRAINT [FK_Portfolio_Categories]
GO
USE [master]
GO
ALTER DATABASE [Portfolio] SET  READ_WRITE 
GO
