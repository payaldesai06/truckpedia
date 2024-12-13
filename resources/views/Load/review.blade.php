<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Load Review</title>
</head>

<body>
	<table style="border-collapse: collapse; margin: 0 auto; width: 100%; padding: 20px;">
		<tr>
			<td style="text-align: center;">
				<h2 style="font-size: 24px; color: #333; font-weight: bold;">Tell <span style="font-weight: bold;">{{$carrierCompanyName}}</span> what you loved<br /> for Load <span style="font-weight: bold;">{{$shipperBrokerLoadNumber}}!</span></h2>
			</td>
		</tr>
		<tr>
			<td style="background-color: transparent; padding: 20px; box-shadow: 0px 4px 12px 2px rgba(51, 51, 51, 0.1098039216), 0px -2px 10px 2px rgba(51, 51, 51, 0.1098039216), 0px 5px 5px 2px rgba(51, 51, 51, 0.1098039216); margin-top: 25px; border-radius: 10px;">
				<h2 style="font-size: 32px; font-weight: 600; text-align: center; color: #333;">Hey, {{$shipperBrokerCompanyName}}</h2>
				<h3 style="font-size: 24px; font-weight: 600; color: #333; text-align: center; padding-bottom: 25px; border-bottom: 1px solid #D5D5D5;">How did {{$carrierCompanyName}} do?</h3>
				<table style="width: 100%; text-align: center;">
					<tr>
						<td style="padding: 20px;">
							<button style="background: transparent; margin: 15px; padding: 12px 20px; color: #333; border: 1px solid #333; border-radius: 8px; cursor: pointer;">Great Job</button>
							<button style="background: transparent; margin: 15px; padding: 12px 20px; color: #333; border: 1px solid #333; border-radius: 8px; cursor: pointer;">Satisfied</button>
							<button style="background: transparent; margin: 15px; padding: 12px 20px; color: #333; border: 1px solid #333; border-radius: 8px; cursor: pointer;">Delayed</button>
							<br>
							<button style="background: transparent; margin: 15px; padding: 12px 20px; color: #333; border: 1px solid #333; border-radius: 8px; cursor: pointer;">Driver Behavior</button>
							<button style="background: transparent; margin: 15px; padding: 12px 20px; color: #333; border: 1px solid #333; border-radius: 8px; cursor: pointer;">Other</button>
						</td>
					</tr>
					<tr>
						<td style="padding: 20px;">
							<a href="{{$reviewUrl}}" target="_blank" style="margin-top: 25px; text-decoration: none; padding: 12px 35px; border-radius: 2px; border: 0; background-color: #3975eb; color: #fff; cursor: pointer;">Click to submit a review</a>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>

</html>