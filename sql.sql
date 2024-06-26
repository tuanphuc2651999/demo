USE [Demo]
GO
/****** Object:  Table [dbo].[Staff]    Script Date: 2024/05/03 17:12:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Staff](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[FullName] [nvarchar](50) NULL,
	[ShortName] [nvarchar](50) NULL,
 CONSTRAINT [PK_Staff] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[StaffInTask]    Script Date: 2024/05/03 17:12:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[StaffInTask](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[IDStaff] [int] NULL,
	[IDTask] [int] NULL,
 CONSTRAINT [PK_StaffInTask] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task]    Script Date: 2024/05/03 17:12:59 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[IDParent] [int] NULL,
	[Label] [nvarchar](250) NULL,
	[Type] [nvarchar](50) NULL,
	[Name] [nvarchar](500) NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Duration] [int] NULL,
	[Progress] [float] NULL,
	[IsUnscheduled] [bit] NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Staff] ON 

INSERT [dbo].[Staff] ([Id], [FullName], [ShortName]) VALUES (4, N'Đào Huy C', N'C')
INSERT [dbo].[Staff] ([Id], [FullName], [ShortName]) VALUES (5, N'TEST1', N'TEST')
INSERT [dbo].[Staff] ([Id], [FullName], [ShortName]) VALUES (6, N'Nguyễn Văn Cảnh', N'Cảnh')
INSERT [dbo].[Staff] ([Id], [FullName], [ShortName]) VALUES (7, N'Nguyễn Hưu Hùng', N'Hùng')
INSERT [dbo].[Staff] ([Id], [FullName], [ShortName]) VALUES (8, N'Võ Văn C', N'C')
INSERT [dbo].[Staff] ([Id], [FullName], [ShortName]) VALUES (9, N'9', N'9')
SET IDENTITY_INSERT [dbo].[Staff] OFF
GO
SET IDENTITY_INSERT [dbo].[Task] ON 

INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (1, NULL, N'TASK 1', N'1', N'TASK 1', CAST(N'2024-05-03T00:00:00.000' AS DateTime), CAST(N'2023-05-07T00:00:00.000' AS DateTime), 4, 0.5, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (2, 1, N'TASK 1-1', N'1', N'TASK 1-1', CAST(N'2024-05-07T00:00:00.000' AS DateTime), CAST(N'2023-05-09T00:00:00.000' AS DateTime), 2, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (3, 1, N'TASK 1-2', N'1', N'TASK 1-2', CAST(N'2024-05-09T00:00:00.000' AS DateTime), CAST(N'2023-05-19T00:00:00.000' AS DateTime), 10, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (4, NULL, N'TASK2', N'1', N'TASK 2', CAST(N'2024-05-05T00:00:00.000' AS DateTime), CAST(N'2023-05-07T00:00:00.000' AS DateTime), 2, 0.1, NULL)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (5, NULL, N'TASK3', N'1', N'TASK 3', CAST(N'2024-05-07T00:00:00.000' AS DateTime), CAST(N'2023-05-10T00:00:00.000' AS DateTime), 3, 0.1, NULL)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (10, 0, N'New task 4', N'1', N'New task 4', CAST(N'2024-05-01T17:00:00.000' AS DateTime), CAST(N'2024-05-06T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (11, 0, N'New task 5', N'1', N'New task 5', CAST(N'2024-05-01T17:00:00.000' AS DateTime), CAST(N'2024-05-06T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (12, 0, N'New task 6', N'1', N'New task 6', CAST(N'2024-05-01T17:00:00.000' AS DateTime), CAST(N'2024-05-06T17:00:00.000' AS DateTime), 3, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (13, 0, N'OK ne', N'1', N'OK ne', CAST(N'2024-05-01T17:00:00.000' AS DateTime), CAST(N'2024-05-06T17:00:00.000' AS DateTime), 4, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (14, 0, N'New task', N'1', N'New task', CAST(N'2024-05-01T17:00:00.000' AS DateTime), CAST(N'2024-05-06T17:00:00.000' AS DateTime), 11, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (15, 0, N'New task', N'1', N'New task', CAST(N'2024-05-02T17:00:00.000' AS DateTime), CAST(N'2024-05-07T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (16, 22, N'New task', N'1', N'New task', CAST(N'2024-05-02T17:00:00.000' AS DateTime), CAST(N'2024-05-07T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (22, 0, N'Edit', N'1', N'Edit', CAST(N'2024-04-30T17:00:00.000' AS DateTime), CAST(N'2024-05-05T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (23, 0, N'New task', N'1', N'New task', CAST(N'2024-05-02T17:00:00.000' AS DateTime), CAST(N'2024-05-03T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (24, 0, N'New task', N'1', N'New task', CAST(N'2024-05-02T17:00:00.000' AS DateTime), CAST(N'2024-05-03T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (25, 0, N'New task', N'1', N'New task', CAST(N'2024-05-02T17:00:00.000' AS DateTime), CAST(N'2024-05-03T17:00:00.000' AS DateTime), 1, 0, 1)
INSERT [dbo].[Task] ([Id], [IDParent], [Label], [Type], [Name], [StartDate], [EndDate], [Duration], [Progress], [IsUnscheduled]) VALUES (26, 0, N'New task', N'1', N'New task', CAST(N'2024-05-02T00:00:00.000' AS DateTime), CAST(N'2024-05-03T17:00:00.000' AS DateTime), 1, 0, 1)
SET IDENTITY_INSERT [dbo].[Task] OFF
GO
